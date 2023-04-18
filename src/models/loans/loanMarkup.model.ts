import { Entity } from '../core/entity';

import { LoanMarkupDto } from './dtos';

export class LoanMarkup extends Entity<LoanMarkupDto> {
  constructor(dto: LoanMarkupDto) {
    super(dto, 'tenure');
  }

  get tenure(): number {
    return this.dto.tenure ?? 0;
  }

  get rate(): number {
    return this.dto.rate ?? 0;
  }
}
