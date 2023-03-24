import { ICreditTariff } from '../../../entities/credit/creditTariff';
import { ICreditAccount } from '../../../entities/credit/creditAccount';

export interface ICreditRepository {
  getCreditTariffs: () => Promise<ICreditTariff[]>;
  getCreditAccounts: (payload: { id: string }) => Promise<ICreditAccount[]>;
  getCreditAccount: (payload: { id: string }) => Promise<ICreditAccount>;
  createCreditAccount:
    (payload: ICreateCreditAccountPayload) => Promise<ICreateCreditAccountResponse>;
}

export interface ICreateCreditAccountPayload {
  tariffId: string;
  ownerId: string;
}

export interface ICreateCreditAccountResponse {
  id: string;
}
