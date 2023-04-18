import moment, { Moment } from 'moment';

import { Entity } from '../core/entity';

import {
  LoanTransactionDestination,
  LoanTransactionDto,
  LoanTransactionMethod,
  LoanTransactionStatusType,
  LoanTransactionType,
} from './dtos';

export class LoanTransaction extends Entity<LoanTransactionDto> {
  /**
   * The ID of the user who requested the loan.
   */
  get userId(): string {
    return this.dto.user_id;
  }

  /**
   * Amount of the transaction
   */
  get amount(): number {
    return this.dto.amount ?? 0;
  }

  get status(): LoanTransactionStatusType {
    return this.dto.status;
  }

  get loanId(): string {
    return this.dto.loan_id;
  }

  private get type(): LoanTransactionType {
    return this.dto.type;
  }

  /**
   * The date on which actual payment was done
   */
  get paymentDate(): Date {
    return new Date(this.dto.payment_date);
  }

  get paymentDateEpoch(): number {
    return moment(this.dto.payment_date ?? '').valueOf();
  }

  /**
   * Note: This isn't the transaction creation date but
   * this is record transaction date. Use paymentDate if
   * you're looking for the former.
   */
  get createdAt(): Date {
    return new Date(this.dto.created_at);
  }

  /**
   * Transaction destination account details
   */
  // @ts-ignore
  private get destination(): LoanTransactionDestination {
    return this.dto.destination ?? {};
  }

  private get method(): LoanTransactionMethod {
    return this.dto.method;
  }

  /**
   * METHODS
   */

  /**
   * Transaction is under review
   */
  isProcessing(): boolean {
    return this.status === LoanTransactionStatusType.Processing;
  }

  /**
   * Transaction is verified by loan officer
   */
  isApproved(): boolean {
    return this.status === LoanTransactionStatusType.Approved;
  }

  isBankTransaction(): boolean {
    return this.method === LoanTransactionMethod.BankTransfer;
  }

  /**
   * Transaction was done by payment of cash to FSO (Field officer)
   */
  isFsoTransaction(): boolean {
    return this.method === LoanTransactionMethod.CashViaFSO;
  }

  isDisbursement(): boolean {
    return this.type === LoanTransactionType.Disbursement;
  }

  getPaymentDate(): Moment {
    return moment(this.paymentDate);
  }
}
