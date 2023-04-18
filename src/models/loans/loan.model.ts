import moment, { Moment } from 'moment';

import { Entity } from '../core/entity';

import {
  LoanDto,
  LoanInvoice,
  LoanPayments,
  LoanPending,
  LoanRequestType,
  LoanStatus,
  LoanStatusType,
  PartnerMeta,
  PaymentPlan,
  ProductDeliveryType,
} from './dtos';
import { LoanTransactionList } from './loanTransactionList.model';
import { TijarahProductList } from './tijarahProductList.model';

export class Loan extends Entity<LoanDto> {
  /**
   * For calculating the markup fee on loan amount
   */
  static calculateMarkupFee(
    principal: number,
    tenure: number,
    markupRate: number,
  ) {
    const markupPerDay = markupRate / tenure / 100;

    return markupPerDay * tenure * principal;
  }

  /**
   * An array of the loan's statuses, with the most recent status being the last element.
   */
  // @ts-ignore
  private get statuses(): LoanStatus[] {
    return this.dto.statuses ?? [];
  }

  private matchStatus(status: LoanStatusType): boolean {
    return !!this.statuses.find((statusObj) => statusObj.status === status);
  }

  get status(): LoanStatusType {
    return this.dto.status;
  }

  private get latestStatusObj(): LoanStatus {
    return [...this.statuses].pop()!;
  }

  get userId(): string {
    return this.dto.user_id;
  }

  /**
   * The amount of the loan principal.
   * TODO: Rename to principal
   */
  get principle(): number {
    return this.dto.principal_amount ?? 0;
  }

  /**
   * The display ID of the loan.
   */
  get displayId(): string {
    return this.dto.display_id?.toString() ?? '';
  }

  /**
   * The creation date of loan
   */
  get creationDate(): Date {
    return new Date(this.dto.created_at);
  }

  /**
   * Returns the disburse date of the loan if it has been disbursed,
   *
   * @returns {Date} The disbursement date.
   */
  get disbursementDate(): Date | undefined {
    const disbursedStatus = this.statuses.find(
      (statusObj) => statusObj.status === LoanStatusType.Disbursed,
    );

    if (disbursedStatus) {
      return new Date(disbursedStatus.timestamp);
    }

    return undefined;
  }

  /**
   * The date till which loan should be repaid
   */
  get dueDate(): Moment {
    return moment(this.dto.due_date ?? '');
  }

  /**
   * Number of days to return loan
   */
  get tenure(): number {
    return this.dto.tenure ?? 0;
  }

  /**
   * Markup for every day
   */
  get markupPerDay(): number {
    return this.dto.markup_per_day ?? 0;
  }

  /**
   * Number of days for the delivery of stock
   */
  private get deliveryType(): ProductDeliveryType {
    return this.dto.delivery_type;
  }

  /**
   * Object contains principle, markup fee and
   * tenure for the amount that is yet to be repaid
   */
  private get pending(): LoanPending {
    return this.dto.pending ?? {};
  }

  private get payments(): LoanPayments {
    return this.dto.payments ?? {};
  }

  private get paymentPlan(): PaymentPlan {
    return this.dto.payment_plan ?? {};
  }

  private get partner(): PartnerMeta {
    return this.dto.partner ?? {};
  }

  /**
   * Markup fee that is pending
   */
  get outstandingMarkupFee(): number {
    return this.pending.markup_fee ?? 0;
  }

  /**
   * Latest 3 transactions
   */
  get transactionList(): LoanTransactionList {
    return new LoanTransactionList(this.dto.latest_transactions);
  }

  get pendingPrincipal(): number {
    return this.pending.principal ?? 0;
  }

  private get requestType(): LoanRequestType {
    return this.dto.request_type;
  }

  get tijarahProductList(): TijarahProductList {
    return new TijarahProductList(this.dto.items);
  }

  get invoice(): LoanInvoice {
    const invoice = this.dto.invoice;

    return {
      id: invoice?.id ?? '',
      amount: invoice?.amount ?? 0,
      images: invoice?.images ?? [],
    };
  }

  get partnerId(): string {
    return this.partner.id ?? '';
  }

  /**
   * METHODS
   */

  /**
   * Returns true if loan request is approved by the loan officer
   */
  isProcessing(): boolean {
    return (
      this.status === LoanStatusType.UnderReview ||
      this.status === LoanStatusType.AwaitingAdminApproval
    );
  }

  isApproved(): boolean {
    return this.matchStatus(LoanStatusType.Approved);
  }

  /**
   * Check if the loan is disbursed or not
   */
  isDisbursed(): boolean {
    return this.matchStatus(LoanStatusType.Disbursed);
  }

  isCompleted(): boolean {
    return this.status === LoanStatusType.Completed;
  }

  isRejected(): boolean {
    return this.status === LoanStatusType.Rejected;
  }

  /**
   * Returns true if loan is completely paid
   */
  isPaid(): boolean {
    return this.isCompleted();
  }

  /**
   * Returns true if loan is cancelled
   */
  isCancelled(): boolean {
    return this.status === LoanStatusType.Cancelled;
  }

  isOverdue(): boolean {
    return this.status === LoanStatusType.Overdue;
  }

  isDefault(): boolean {
    return this.status === LoanStatusType.Default;
  }

  /**
   * Maximum markup fee that can be charged
   */
  getMaxMarkupFee(): number {
    return this.tenure * this.markupPerDay * this.principle ?? 0;
  }

  /**
   * Calculates the total remaining amount of a loan by adding
   * the pending principal and the total markup fee.
   */
  getMaxOutstanding() {
    return this.pendingPrincipal + this.getMaxMarkupFee();
  }

  /**
   * Returns true if products are to be delivered on spot
   */
  isDeliveryOnSpot(): boolean {
    return this.deliveryType === ProductDeliveryType.OnSpot;
  }

  /**
   * Returns true if products are to be delivered next day
   */
  isDeliveryTomorrow(): boolean {
    return this.deliveryType === ProductDeliveryType.Tomorrow;
  }

  /**
   * Returns true if products are to be delivered within a week
   */
  isDeliveryWithinAWeek(): boolean {
    return this.deliveryType === ProductDeliveryType.WithinAWeek;
  }

  /**
   * Calculates the markup fee from today until due date
   */
  getMarkupFeeUntilDueDateFromToday(): number {
    if (this.isLoanOverdue()) {
      return 0;
    }

    const daysUntilDueDate = this.dueDate.diff(moment(), 'days');

    return daysUntilDueDate * this.markupPerDay * this.principle;
  }

  /**
   * This will return the sum of principle and
   * total markup fee until the end of the tenure
   * This is the maximum amount that would be
   * repayable on this loan
   */
  getMaxRepayment(): number {
    return this.principle + this.getMaxMarkupFee();
  }

  /**
   * Total amount left to be repaid
   */
  getOutstandingTillDate(): number {
    const { principal, markup_fee } = this.pending;
    return principal + markup_fee;
  }

  /**
   * This is implementation is done as per UI Spec.
   */
  isPaymentDue(): boolean {
    if (this.isApproved()) {
      switch (this.deliveryType) {
        case ProductDeliveryType.OnSpot:
          return this.getCreationDate().diff(moment(), 'minutes') >= 5;
        case ProductDeliveryType.Tomorrow:
          return this.getCreationDate().diff(moment(), 'hours') >= 24;
        case ProductDeliveryType.WithinAWeek:
          return this.getCreationDate().diff(moment(), 'days') >= 5;
        default:
          return false;
      }
    }

    return false;
  }

  /**
   * Checks if loan is overdue for payment
   *
   * Note: We don't have default scenario in our case
   * so we are clubbing it with overdue and there is a chance
   * that loan is overdue but status is not changed so
   * placed a condition with isApproved also
   */
  isLoanOverdue(): boolean {
    return (
      (this.isApproved() && this.dueDate.endOf('day').isBefore(moment())) ||
      this.isOverdue() ||
      this.isDefault()
    );
  }

  /**
   * Returns true if this loan is using the credit limit
   */
  isActive(): boolean {
    return !(this.isPaid() || this.isCancelled() || this.isRejected());
  }

  /**
   * Returns true if there is any outstanding markup fee
   */
  hasOutstandingMarkupFee(): boolean {
    return !!this.outstandingMarkupFee;
  }

  /**
   * Sum of repayment transactions done by the user
   */
  getTotalRepaid(): number {
    return this.payments.principal_repaid + this.payments.markup_fee;
  }

  /**
   * Total Markup fee that is repaid
   * It is used if user makes an early repayment
   */
  getRepaidMarkupFee(): number {
    return this.payments.markup_fee ?? 0;
  }

  isOneTimePayment(): boolean {
    return this.paymentPlan === PaymentPlan.OneTimePayment;
  }

  isPayAsYouGo(): boolean {
    return this.paymentPlan === PaymentPlan.PayAsYouGo;
  }

  /**
   * Returns true if the request for loan was made
   * by uploading invoice copy
   */
  isInvoiceBased(): boolean {
    return this.requestType === LoanRequestType.Invoice;
  }

  /**
   * Returns true if the request for loan was made manually
   * i.e by entering the product details manually
   */
  isProductBased(): boolean {
    return this.requestType === LoanRequestType.Manual;
  }

  hasTransaction(): boolean {
    return this.transactionList.hasItems();
  }

  getLatestTransactionDate(): Moment | undefined {
    const latestTransaction = this.transactionList.first();

    if (latestTransaction) {
      return moment(latestTransaction.paymentDate);
    }
  }

  getCreationDate(): Moment {
    return moment(this.dto.created_at ?? '');
  }

  /**
   * Returns the disburse date of the loan if it has been disbursed,
   *
   * @returns {Moment} The disbursement date.
   */
  getDisbursementDate(): Moment | undefined {
    return this.disbursementDate ? moment(this.disbursementDate) : undefined;
  }

  hasProcessingTransaction(): boolean {
    return !!this.transactionList.find((transaction) =>
      transaction.isProcessing(),
    );
  }

  /**
   * Returns a boolean indicating whether the loan can be repaid or not.
   * Note: Loan repayment is not allowed on the day of disbursement
   * @returns {boolean} Whether the loan can be repaid.
   */
  canRepay(): boolean {
    if (!this.isDisbursed() || this.isPaid()) {
      return false;
    }

    /**
     * Loan repayment is not allowed on the day of disbursement
     */
    return (
      moment().format('DD-MM-YYYY') !==
      moment(this.disbursementDate?.valueOf()).format('DD-MM-YYYY')
    );
  }

  /**
   * Returns the date of the latest status of the loan
   */
  getLatestStatusDate(): Moment {
    return moment(this.latestStatusObj.timestamp);
  }

  /**
   * Returns true if loan became inactive(complete, rejected, cancelled)
   * within 24 hours
   */
  becameInactiveWithin24hours(): boolean {
    return (
      !this.isActive() &&
      this.getLatestStatusDate().diff(moment(), 'hours') <= 24
    );
  }
}
