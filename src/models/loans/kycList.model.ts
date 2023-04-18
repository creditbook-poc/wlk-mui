import { EntityList } from "../core/entityList";

import { KycDto } from "./dtos/kyc.dto";
import { Kyc } from "./kyc.model";

export class KycList extends EntityList<Kyc> {
  constructor(dtos: KycDto[] = []) {
    super(dtos, Kyc);
  }

  /**
   * Only available once the list is loaded
   */
  getLatestKyc(): Kyc {
    return this.sortBy("createdAtEpoch").last()!;
  }

  getCreditLimit(): number {
    const DEFAULT_CREDIT_LIMIT = 50000;
    return this.getLatestKyc()?.creditLimit ?? DEFAULT_CREDIT_LIMIT;
  }
}
