import { ICreateCreditTariffPayload, ICreditTariff } from '../../../entities/credit/creditTariff';

export interface ICreditRepository {
  getCreditTariffs: () => Promise<ICreditTariff[]>;
  createCreditTariff: (payload: ICreateCreditTariffPayload) => Promise<void>;
  takeLoan: (payload: ITakeLoanPayload) => Promise<ITakeLoanResponse>;
}

export interface ITakeLoanPayload {
  tariffId: string;
}

export interface ITakeLoanResponse {
  bankAccountID: string;
}
