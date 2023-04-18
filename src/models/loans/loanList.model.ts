import { Moment } from 'moment';

import { EntityList } from '../core/entityList';

import { LoanDto } from './dtos';
import { Loan } from './loan.model';

export class LoanList extends EntityList<Loan> {
  constructor(dtos: LoanDto[] = []) {
    super(dtos, Loan);
  }

  getLatestLoan(): Loan | undefined {
    return this.first();
  }

  /**
   * Returns the used limit based on the active loans
   */
  getUsedLimit(): number {
    let limit = 0;

    this.map((loan) => {
      if (loan.isActive()) {
        limit += loan.principle;
      }
    });

    return limit;
  }

  /**
   * Returns an array of active loans
   * Note: There could be only one active loan at the max
   */
  getActiveList(): LoanList {
    const list = new LoanList();

    this.map((loan) => {
      if (loan.isActive()) {
        list.addItem(loan);
      }
    });

    return list;
  }

  /**
   * Returns an array of inactive loans
   */
  getInactiveList(): LoanList {
    const list = new LoanList();

    this.map((loan) => {
      if (!loan.isActive()) {
        list.addItem(loan);
      }
    });

    return list;
  }

  getInactiveListUntil(date: Moment): LoanList {
    const inactiveList = this.getInactiveList();

    const filteredItems = inactiveList.filter((loan) => {
      return loan.getLatestStatusDate().isBefore(date);
    });

    return new LoanList().addItems(filteredItems) as LoanList;
  }
}
