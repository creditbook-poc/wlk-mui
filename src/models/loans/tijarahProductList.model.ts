import { EntityList } from '../core/entityList';

import { TijarahProductDto } from './dtos';
import { TijarahProduct } from './tijarahProduct.model';

export class TijarahProductList extends EntityList<TijarahProduct> {
  constructor(dtos: TijarahProductDto[] = []) {
    super(dtos, TijarahProduct, { generateId: true });
  }
}
