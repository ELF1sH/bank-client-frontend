import { AxiosResponse } from 'axios';

import { axiosInstance as axios } from '../axiosInstance';
import { ICreditRepository, ICreateCreditAccountPayload, ICreateCreditAccountResponse } from './interfaces/ICreditRepository';
import { ICreditTariff } from '../../entities/credit/creditTariff';
import { ICreditAccount } from '../../entities/credit/creditAccount';

class CreditRepository implements ICreditRepository {
  public getCreditTariffs(): Promise<ICreditTariff[]> {
    return axios
      .get('/tariffs/all')
      .then((response: AxiosResponse<ICreditTariff[]>) => response.data);
  }

  public getCreditAccounts(payload: { id: string }): Promise<ICreditAccount[]> {
    const { id } = payload;

    return axios
      .get(`/credit-accounts?ownerId=${id}`)
      .then((response: AxiosResponse<ICreditAccount[]>) => response.data);
  }

  public getCreditAccount(payload: { id: string }): Promise<ICreditAccount> {
    const { id } = payload;

    return axios
      .get(`/credit-accounts/${id}`)
      .then((response: AxiosResponse<ICreditAccount>) => response.data);
  }

  public createCreditAccount(
    payload: ICreateCreditAccountPayload,
  ): Promise<ICreateCreditAccountResponse> {
    return axios
      .post('/create-credit-account', payload)
      .then((response: AxiosResponse<ICreateCreditAccountResponse>) => response.data);
  }
}

export const creditRepository = new CreditRepository();
