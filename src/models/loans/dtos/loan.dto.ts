import { LoanTransactionDto } from './loanTransaction.dto';

/**
 * Enum for the types of businesses that we would lend to
 */
export enum LoanBusinessType {
  Sme = 'sme',
  Msme = 'msme',
}

export enum LoanType {
  Fixed = 'fixed',
  Floating = 'floating',
}

/**
 * Enum for the platform on which request will be received
 */
export enum Platform {
  MobileApp = 'mobile_app',
  WebApp = 'web_app',
}

/**
 * Enum for the loan status types
 */
export enum LoanStatusType {
  UnderReview = 'under_review',
  AwaitingAdminApproval = 'awaiting_admin_approval',
  Approved = 'approved',
  Disbursed = 'disbursed',
  Completed = 'completed',
  Overdue = 'overdue',
  Default = 'default',
  Rejected = 'rejected',
  Cancelled = 'cancelled',
}

/**
 * Enum for the time on which products should be delivered
 * Products are to be delivered by the partner company
 */
export enum ProductDeliveryType {
  OnSpot = 'on_spot',
  Tomorrow = 'tomorrow',
  WithinAWeek = 'within_a_week',
}

/**
 * Enum for the types of loan request
 * It defines how user entered the products for
 * which the loan is needed
 */
export enum LoanRequestType {
  Manual = 'manual',
  Invoice = 'invoice',
}

/**
 * Enum for the loan repayment plans
 */
export enum PaymentPlan {
  PayAsYouGo = 'pay_as_you_go',
  OneTimePayment = 'one_time_payment',
}

/**
 * Interface for loan status
 * It contains information about the status of the loan,
 * time of that status and information of the person who
 * changed to that status
 */
export interface LoanStatus {
  status: LoanStatusType;
  timestamp: string;
  updated_by: string;
}

/**
 * Interface for payments that have been received against a loan
 */
export interface LoanPayments {
  /**
   * Total Markup Fee repaid by the user
   */
  markup_fee: number;

  /**
   * Total Principal Amount repaid by the user
   */
  principal_repaid: number;

  /**
   * Late Fee repaid by the user.
   * Late Fee is the additional amount charged
   * when the payment is overdue
   */
  late_fees: number;
}

/**
 * Interface for the information for pending amount of loan
 */
export interface LoanPending {
  /**
   * Total Principal Amount left to be repaid
   */
  principal: number;

  /**
   * Total Markup Fee left to be repaid
   * Calculated until current day for payAsYouGo plan.
   * It remains fixed for oneTimePayment since the user
   * has to pay entire markup fee
   */
  markup_fee: number;

  /**
   * Total number of days for which Markup Fee is yet to be charged
   * i.e. The difference between last transaction date and due date
   */
  tenure: number;
}

/**
 * Interface for partner's metadata in loan.
 * Keeping this in loan because partner's information
 * might change
 */
export interface PartnerMeta {
  id: string;
  name: string;
}

/**
 * Product against which a loan is disbursed
 */
export interface TijarahProductDto {
  name: string;
  image?: string;
  amount: number;
  unit: string;
  count: number;
}

export interface LoanInvoice {
  images: string[];
  amount: number;
  id: string;
}

/**
 * Loan could be of different types i.e SME, MSME etc. In mobile app,
 * we are dealing only with MSME for now
 *
 * Principle - Total amount disbursed
 *
 * Markup - Percentage charged on principle
 *
 * MarkupFee - Fee that is charged against a loan as interest
 *
 * What is Loan?
 *
 * What is LoanApplication?
 *
 * Why we are not using LoanApplication
 *
 * IMPORTANT: IT IS NOT SAME AS IN-APP TIJARAH LOAN!
 */
export interface LoanDto {
  id: string;
  user_id: string;
  /**
   * Partner through which we disburse the loan
   */
  partner: PartnerMeta;
  business_type: LoanBusinessType;
  type: LoanType;
  disbursement_date: string;
  principal_amount: number;
  /**
   * Last object in array would be the current status of loan.
   * Other objects would be there to keep a record of the status
   * of loan in past
   */
  statuses: LoanStatus[];
  status: LoanStatusType;
  /**
   * Number of days to return the loan
   */
  tenure: number;
  /**
   * Total percentage charged on principle amount
   */
  markup: number;
  /**
   * MARKUP/TENURE/100
   */
  markup_per_day: number;
  due_date: string;
  payments: LoanPayments;
  pending: LoanPending;
  /**
   * This is a unique id generated for the purpose of displaying.
   * This value is incremental number
   */
  display_id: number;
  kyc_id: string;
  delivery_type: ProductDeliveryType;
  request_type: LoanRequestType;
  payment_plan: PaymentPlan;
  reason: string;
  /**
   * Not dealing with items and invoice for now
   */
  items?: TijarahProductDto[];
  invoice?: LoanInvoice;
  latest_transactions: LoanTransactionDto[];
  created_at: string;
  updated_at: string;
}
