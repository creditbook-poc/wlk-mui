import _ from 'lodash';

import { EntityId } from './entity';

type CustomClass<T> = new (...args: any[]) => T;
type Entity<T> = T & { id: EntityId };
type Iterator<T, U = void> = (item: T, index: number) => U;

export abstract class EntityList<
  T extends { id?: EntityId } | Record<string, any>,
> {
  private readonly items: Array<T & { id: EntityId }>;
  readonly Type: CustomClass<T>;
  private generateId: boolean;

  private static hasDuplicateIds = <X extends { id: EntityId }>(
    items: Array<X>,
  ): boolean => {
    const group = _.groupBy(items, (item) => item.id);
    return _.some(group, (_items) => _items.length > 1);
  };

  /**
   * EntityList of items
   * @param rawData Data to be modelled as list items
   * @param Type Class name to instantiate items
   * @param generateId Generates ids automatically for items
   */
  protected constructor(
    rawData: any,
    Type: CustomClass<T>,
    { generateId }: { generateId?: boolean } = {},
  ) {
    this.items = [] as Array<Entity<T>>;
    this.Type = Type;
    this.generateId = !!generateId;

    _.each(rawData, (item: any) => {
      const hasId = !!item.id;

      if (!hasId && !generateId) {
        throw new Error('All the list items must have an unique id');
      }

      const newItem = new Type(item) as Entity<T>;

      if (!hasId) {
        _.set(newItem, 'id', _.uniqueId('list_item_'));
      }

      this.addItem(newItem);
    });

    if (EntityList.hasDuplicateIds(this.items)) {
      throw new Error('EntityList contains duplicate items');
    }
  }

  get size(): number {
    return this.items.length;
  }

  hasItems(): boolean {
    return this.size > 0;
  }

  isEmpty(): boolean {
    return !this.hasItems();
  }

  getIds(): EntityId[] {
    return _.map(this.items, (item) => item.id);
  }

  getItemById(id: EntityId): T | undefined {
    return _.find(this.items, (item: T) => item.id === id);
  }

  getItems(): T[] {
    return [...this.items];
  }

  /**
   * Note: This will not re-render the component
   * State needs to be updated after invoking this function
   */
  addItem(item: Entity<T>): EntityList<T> {
    const hasId = !!item.id;

    if (!hasId) {
      if (!this.generateId) {
        throw new Error('All the list items must have an unique id');
      } else {
        _.set(item, 'id', _.uniqueId('list_item_'));
      }
    }

    if (this.getItemById(item.id)) {
      this.updateItem(item);
    } else {
      this.items.push(item);
    }

    return this;
  }

  /**
   * Adds items to the end of the list
   * @param items Array of items
   */
  addItems(items: T[]): EntityList<T> {
    items.map((item) => this.addItem(item as Entity<T>));
    return this;
  }

  /**
   * Concats provided list items to the end of the list
   * @param list
   */
  concat(list: EntityList<T>): EntityList<T> {
    return this.addItems(list.items);
  }

  /**
   * Note: This will not re-render the component
   * State needs to be updated after invoking this function
   */
  updateItem(updatedItem: Entity<T>): EntityList<T> {
    if (updatedItem && this.hasItems()) {
      const hasItem = this.getItemById(updatedItem.id);

      if (hasItem) {
        const index = _.findIndex(
          this.items,
          (item) => item.id === updatedItem.id,
        );
        this.items[index] = updatedItem;
      }
    }

    return this;
  }

  removeItem(id: EntityId): EntityList<T> {
    const deleteIndex = _.findIndex(this.items, (item) => item.id === id);

    if (deleteIndex >= 0) {
      this.items.splice(deleteIndex, 1);
    }

    return this;
  }

  /**
   * Clears all the items in the array
   */
  clear(): EntityList<T> {
    this.items.length = 0;
    return this;
  }

  replace(items: T[]): EntityList<T> {
    this.clear();
    return this.addItems(items);
  }

  first(): T | undefined {
    return _.first(this.items);
  }

  last(): T | undefined {
    return _.last(this.items);
  }

  find(iterator: (item: T) => boolean): T | undefined {
    return _.find(this.items, iterator);
  }

  findIndex(iterator: (item: T) => boolean): number {
    return _.findIndex(this.items, iterator);
  }

  getIndex(id: EntityId): number {
    return _.findIndex(this.items, (item: T) => item.id === id);
  }

  getFilteredList<X extends EntityList<T>>(
    iterator: (item: T) => boolean,
    list: X,
  ): X {
    list.addItems(_.filter(this.items, iterator));
    return list;
  }

  map<U>(iterator: Iterator<T, U>): U[] {
    return _.map<T, U>(this.items, iterator);
  }

  groupBy(path: string) {
    return _.groupBy(this.items, path);
  }

  /**
   * Sorts the list by value at the given path
   * @param path Path separated by dot(.) for sorting
   * @param reverse Reverses the list after sorting
   */
  sortBy(path: string, reverse?: boolean): EntityList<T> {
    const sorted = _.sortBy(this.items, path);

    if (reverse) {
      sorted.reverse();
    }

    return this.replace(sorted);
  }

  /**
   * Reverses the current list
   */
  reverse(): EntityList<T> {
    this.items.reverse();
    return this;
  }

  /**
   * Returns a copy of current list
   */
  clone<U = EntityList<T>>(): U {
    // @ts-ignore
    const list = new this.constructor();
    list.concat(this);

    return list;
  }

  log(text: string) {
    // eslint-disable-next-line no-console
    console.log(
      text,
      // eslint-disable-next-line no-console
      this.map((item) => console.log(JSON.stringify(item, null, 4))),
    );
  }

  filter(iterator: (item: T) => boolean): T[] {
    return _.filter(this.items, iterator);
  }
}
