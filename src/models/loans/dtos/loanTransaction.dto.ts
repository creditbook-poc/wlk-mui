/**
 * Enumeration of loan transaction types.
 */
export enum LoanTransactionType {
  Disbursement = 'disbursement',
  Repayment = 'repayment',
  LateFee = 'late_fee',
}

/**
 * Enumeration of loan transaction status types.
 */
export enum LoanTransactionStatusType {
  Processing = 'processing',
  Rejected = 'rejected',
  Approved = 'approved',
}

/**
 *  Enumeration of loan transaction methods.
 */
export enum LoanTransactionMethod {
  BankTransfer = 'bank_transfer',
  CashViaFSO = 'cash_via_fso',
}

/**
 * Enumeration of loan transaction destination types.
 */
export enum LoanTransactionDestinationType {
  Bank = 'bank',
  Cash = 'cash',
}

/**
 * Represents the status of a loan transaction.
 */
export interface LoanTransactionStatus {
  /**
   * The status type of the loan
   */
  status: LoanTransactionStatusType;

  /**
   * The timestamp of the status update.
   */
  timestamp: string;

  /**
   * The user who updated the status.
   */
  updated_by: string;
}

/**
 * Represents the destination of a loan transaction.
 */
export interface LoanTransactionDestination {
  /**
   * The destination type of the loan transaction
   */
  type: LoanTransactionDestinationType;

  /**
   * The ID of the loan transaction destination.
   */
  id: string;
}

export interface LoanTransactionDto {
  /**
   * The ID of the loan transaction.
   */
  id: string;

  /**
   * The ID of the user who owns the loan transaction.
   */
  user_id: string;

  /**
   * The ID of the loan associated with the loan transaction.
   */
  loan_id: string;

  /**
   * The type of the loan transaction.
   * e.g. disbursement,repayment or late_fee
   */
  type: LoanTransactionType;

  /**
   * The statuses of the loan transaction.
   */
  statuses: LoanTransactionStatus[];

  /**
   * Latest status
   */
  status: LoanTransactionStatusType;

  /**
   * The date of payment of the loan transaction.
   */
  payment_date: string;

  /**
   * The amount of the loan transaction.
   */
  amount: number;

  /**
   * The method used for the loan transaction.
   */
  method: LoanTransactionMethod;

  /**
   * The image associated with the loan transaction.
   */
  transaction_image: string;

  /**
   * The destination of the loan transaction.
   */
  destination: LoanTransactionDestination;

  /**
   * The ID of the invoice associated with the loan transaction.
   */
  invoice_id: string;

  /**
   * The timestamp of when the loan transaction was created.
   */
  created_at: string;

  /**
   * The timestamp of when the loan transaction was updated.
   */
  updated_at: string;
}
