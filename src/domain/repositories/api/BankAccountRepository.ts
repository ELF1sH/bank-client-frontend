import axios, { AxiosResponse } from 'axios';

import { IBankAccountRepository } from './interfaces/IBankAccountRepository';
import { IBankAccount } from '../../entities/bankAccounts/bankAccount';
import {
  mockGettingBankAccount,
  mockGettingBankAccountsList,
  mockGettingOperationsHistory,
} from './mocks/bankAccountMocks';
import { IOperation } from '../../entities/bankAccounts/operation';

mockGettingBankAccountsList();
mockGettingBankAccount();
mockGettingOperationsHistory();

class BankAccountRepository implements IBankAccountRepository {
  public getBankAccounts(id: string) {
    return axios
      .get(`/bank-accounts?id=${id}`)
      .then((response: AxiosResponse<IBankAccount[]>) => response.data);
  }

  public getBankAccount(id: string) {
    return axios
      .get(`/bank-account?id=${id}`)
      .then((response: AxiosResponse<IBankAccount>) => response.data);
  }

  public getOperationsHistory(id: string) {
    return axios
      .get(`/operations-history?id=${id}`)
      .then((response: AxiosResponse<IOperation[]>) => response.data);
  }
}

export const bankAccountRepository = new BankAccountRepository();
