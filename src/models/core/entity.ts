import { Model } from './model';

export type EntityId = string | number;

/**
 * Base method for all the entities
 * i.e. The DTOs with unique IDs
 * T is a DTO
 */
export abstract class Entity<T extends Record<string, any>> extends Model<T> {
  private readonly _id: EntityId;

  constructor(dto: T, idKey?: string) {
    super(dto);
    this._id = dto[idKey ?? 'id'] as EntityId;
  }

  get id(): string {
    return this._id as string;
  }
}
