import { ICreateCreditTariffPayload, ICreditTariff } from '../../../entities/credit/creditTariff';

export interface ICreditRepository {
  getCreditTariffs: () => Promise<ICreditTariff[]>;
  createCreditTariff: (payload: ICreateCreditTariffPayload) => Promise<void>;
}
