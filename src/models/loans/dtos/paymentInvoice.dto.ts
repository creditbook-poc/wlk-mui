export interface ViewPaymentInvoiceTransactionDetailsDto {
  id: string;
  transaction_auth_id: string;
  amount: number;
  timestamp: string;
  bank_mnemonic: string;
  json_dump: string;
  created_at: string;
}

export enum PAYMENT_INVOICE_PROVIDER {
  ECO_FIN = "ECO_FIN",
}

export enum PAYMENT_INVOICE_TYPE {
  LOAN_REPAYMENT = "LOAN_REPAYMENT",
}

export enum PAYMENT_INVOICE_GENERATOR {
  RETAIL_PAY = "RETAIL_PAY",
  CREDITBOOK_MOBILE_APP = "CREDITBOOK_MOBILE_APP",
}

export enum PAYMENT_INVOICE_STATUS {
  PAID = "PAID",
  UNPAID = "UNPAID",
  EXPIRED = "EXPIRED",
}

export interface PaymentInvoiceDto {
  id: string;
  user_id: string;
  consumer_name: string;
  consumer_number: string;
  cb_fee: number;
  user_fee: number;
  invoice_amount: number;
  amount_after_due_date: number;
  amount_within_due_date: number;
  due_date: string;
  expiry_date: string;
  transactions_details?: ViewPaymentInvoiceTransactionDetailsDto;
  allowed_banks: string[];
  provider: PAYMENT_INVOICE_PROVIDER;
  invoice_type: PAYMENT_INVOICE_TYPE;
  generated_by: PAYMENT_INVOICE_GENERATOR;
  payment_status: PAYMENT_INVOICE_STATUS;
  created_at: string;
  updated_at: string;
}
