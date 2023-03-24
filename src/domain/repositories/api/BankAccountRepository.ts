import { AxiosResponse } from 'axios';

import { IBankAccountRepository, IOperationPayload } from './interfaces/IBankAccountRepository';
import { IBankAccount } from '../../entities/bankAccounts/bankAccount';
import { IOperation } from '../../entities/bankAccounts/operation';
import { axiosInstance as axios } from '../axiosInstance';

class BankAccountRepository implements IBankAccountRepository {
  public getBankAccounts(payload: { id: string }) {
    const { id } = payload;

    return axios
      .get(`/bank-accounts?ownerId=${id}`)
      .then((response: AxiosResponse<IBankAccount[]>) => response.data);
  }

  public getBankAccount(payload: { id: string }) {
    const { id } = payload;

    return axios
      .get(`/bank-account?id=${id}`)
      .then((response: AxiosResponse<IBankAccount>) => response.data);
  }

  public getOperationsHistory(payload: { id: string }) {
    const { id } = payload;

    return axios
      .get(`/operations-history?id=${id}`)
      .then((response: AxiosResponse<IOperation[]>) => response.data);
  }

  public createBankAccount(payload: { ownerId: string }) {
    return axios
      .post('/create-bank-account', payload)
      .then((response: AxiosResponse<{ id: string }>) => response.data);
  }

  public async closeBankAccount(payload: { id: string }) {
    const { id } = payload;

    await axios
      .post(`/bank-accounts/${id}/close`)
      .then((response: AxiosResponse<void>) => response.data);
  }

  public async withdrawMoney(payload: IOperationPayload) {
    await axios
      .post('/withdraw-bank-account', payload)
      .then((response: AxiosResponse<void>) => response.data);
  }

  public async refillMoney(payload: IOperationPayload) {
    await axios
      .post('/fill-bank-account', payload)
      .then((response: AxiosResponse<void>) => response.data);
  }
}

export const bankAccountRepository = new BankAccountRepository();
