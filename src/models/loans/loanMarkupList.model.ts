import { EntityList } from '../core/entityList';

import { LoanMarkupDto } from './dtos';
import { LoanMarkup } from './loanMarkup.model';

export class LoanMarkupList extends EntityList<LoanMarkup> {
  constructor(dtos: LoanMarkupDto[] = []) {
    super(dtos, LoanMarkup, { generateId: true });
  }

  /**
   * Returns markup rate for any given tenure
   * @param days Tenure for which markup rate needs
   * to be calculated
   */
  getMarkupRate(days: number): number {
    const tenures = this.getIds() as number[];
    tenures.push(days);
    tenures.sort((a: number, b: number) => a - b);
    const position = tenures.indexOf(days);
    const tenure = tenures[position + 1];

    return this.getItemById(tenure)?.rate ?? this.last()?.rate ?? 0;
  }
}
