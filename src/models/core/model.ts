/**
 * Base method for all the data models
 * Modelled data should be IMMUTABLE!
 * T is a DTO
 */
export abstract class Model<T extends Record<string, any>> {
  private readonly _dto: T;

  constructor(dto: T) {
    this._dto = dto ?? {};
  }

  protected get dto(): T {
    return this._dto;
  }

  getDto(): T {
    // Do not serve dto reference to retain immutability
    return { ...this.dto };
  }

  log() {
    // eslint-disable-next-line no-console
    console.log('DTO: \n', JSON.stringify(this.getDto(), undefined, 4));
  }
}
