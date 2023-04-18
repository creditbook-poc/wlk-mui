import { EntityList } from '../core/entityList';

import { LoanTransactionDto } from './dtos';
import { LoanTransaction } from './loanTransaction.model';

export class LoanTransactionList extends EntityList<LoanTransaction> {
  constructor(dtos: LoanTransactionDto[] = []) {
    super(dtos, LoanTransaction);
    this.removeDisbursementTransactions();
    this.sortByLatest();
  }

  private removeDisbursementTransactions() {
    const disbursementTransactions = this.filter((transaction) =>
      transaction.isDisbursement(),
    );
    disbursementTransactions.forEach((transaction) =>
      this.removeItem(transaction.id),
    );
  }

  /**
   * Returns only the approved transactions and not the one's
   * that are under review
   */
  getActiveTransactions(): LoanTransactionList {
    const list = new LoanTransactionList();
    this.map((transaction) =>
      transaction.isApproved() ? list.addItem(transaction) : undefined,
    );

    return list;
  }

  /**
   * sorts transactionList by latest first
   */
  sortByLatest() {
    return this.sortBy('paymentDateEpoch', true);
  }
}
