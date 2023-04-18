import { Model } from '../core/model';

import { TijarahProductDto } from './dtos';

/**
 * This is a nested data model that belongs to loan entity
 * This is the item against which a loan is disbursed
 */
export class TijarahProduct extends Model<TijarahProductDto> {
  /**
   * id will be generated by entity list
   */
  id!: string;

  get count(): number {
    return this.dto.count ?? 0;
  }

  get unit(): string {
    return this.dto.unit ?? '';
  }

  get amount(): number {
    return this.dto.amount ?? 0;
  }

  get image(): string {
    return this.dto.image ?? '';
  }

  get name(): string {
    return this.dto.name ?? '';
  }
}
