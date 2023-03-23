import axios, { AxiosResponse } from 'axios';

import { IBankAccountRepository, IOperationPayload } from './interfaces/IBankAccountRepository';
import { IBankAccount } from '../../entities/bankAccounts/bankAccount';
import { IOperation } from '../../entities/bankAccounts/operation';

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
      .get(`/details-bank-account?id=${id}`)
      .then((response: AxiosResponse<IBankAccount>) => response.data);
  }

  public getOperationsHistory(payload: { id: string }) {
    const { id } = payload;

    return axios
      .get(`/operations-history?id=${id}`)
      .then((response: AxiosResponse<IOperation[]>) => response.data);
  }

  public openBankAccount() {
    return axios
      .get('/open-bank-account')
      .then((response: AxiosResponse<IBankAccount>) => response.data);
  }

  public async closeBankAccount(payload: { id: string }) {
    const { id } = payload;

    await axios
      .post(`/close-bank-account?id=${id}`)
      .then((response: AxiosResponse<void>) => response.data);
  }

  public async withdrawMoney(payload: IOperationPayload) {
    const { bankAccountId, sum } = payload;

    await axios
      .post(`/withdraw-bank-account?id=${bankAccountId}&money=${sum}`, payload)
      .then((response: AxiosResponse<void>) => response.data);
  }

  public async refillMoney(payload: IOperationPayload) {
    const { bankAccountId, sum } = payload;

    await axios
      .post(`/fill-bank-account?id=${bankAccountId}&money=${sum}`, payload)
      .then((response: AxiosResponse<void>) => response.data);
  }
}

export const bankAccountRepository = new BankAccountRepository();
