import axios, { AxiosResponse } from 'axios';

import { IBankAccountRepository, IOperationPayload } from './interfaces/IBankAccountRepository';
import { IBankAccount } from '../../entities/bankAccounts/bankAccount';
import {
  mockClosingBankAccount,
  mockGettingBankAccount,
  mockGettingBankAccountsList,
  mockGettingOperationsHistory,
  mockOpenningBankAccount, mockRefilling, mockWithdrawing,
} from './mocks/bankAccountMocks';
import { IOperation } from '../../entities/bankAccounts/operation';

mockGettingBankAccountsList();
mockGettingBankAccount();

mockGettingOperationsHistory();

mockOpenningBankAccount();
mockClosingBankAccount();

mockWithdrawing();
mockRefilling();

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

  public openBankAccount() {
    return axios
      .get('/open-bank-account')
      .then((response: AxiosResponse<IBankAccount>) => response.data);
  }

  public closeBankAccount(bankAccountId: string) {
    return axios
      .post(`/close-bank-account?id=${bankAccountId}`)
      .then((response: AxiosResponse<IBankAccount>) => response.data);
  }

  public withdrawMoney(payload: IOperationPayload) {
    return axios
      .post('/withdraw', payload)
      .then((response: AxiosResponse<IBankAccount>) => response.data);
  }

  public refillMoney(payload: IOperationPayload) {
    return axios
      .post('/refill', payload)
      .then((response: AxiosResponse<IBankAccount>) => response.data);
  }
}

export const bankAccountRepository = new BankAccountRepository();
