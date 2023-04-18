import moment, { Moment } from 'moment';

import { Entity } from '../core/entity';

import { KycDto } from './dtos/kyc.dto';

export class Kyc extends Entity<KycDto> {
  get creditLimit(): number {
    // Note: Keeping default 1 to prevent divide by 0 error
    return this.dto.credit_limit ?? 1;
  }

  get createdAt(): Moment {
    return moment(this.dto.created_at ?? '');
  }

  get createdAtEpoch(): number {
    return this.createdAt.valueOf();
  }
}
