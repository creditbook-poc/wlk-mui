import { PaymentInvoiceDto } from "./dtos";
import { Entity } from "../core/entity";
import moment, { Moment } from "moment";

export class PaymentInvoice extends Entity<PaymentInvoiceDto> {
  get expiryDate(): Date {
    return new Date(this.dto.expiry_date);
  }

  get consumerNumber(): string {
    return this.dto.consumer_number ?? "";
  }

  get dueDate(): Date {
    return new Date(this.dto.due_date);
  }

  get consumerName(): string {
    return this.dto.consumer_name ?? "";
  }

  get invoiceAmount(): number {
    return this.dto.invoice_amount ?? 0;
  }

  get cbFee(): number {
    return this.dto.cb_fee ?? 0;
  }

  get userFee(): number {
    return this.dto.user_fee ?? 0;
  }

  getExpiryDate(): Moment {
    return moment(this.expiryDate ?? "");
  }

  getDueDate(): Moment {
    return moment(this.dueDate ?? "");
  }
  
  getTransactionFee(): number {
    return this.cbFee + this.userFee;
  }
}
