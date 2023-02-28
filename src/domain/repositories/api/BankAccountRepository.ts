import axios, { AxiosResponse } from 'axios';

import { IBankAccountRepository, IOperationPayload } from './interfaces/IBankAccountRepository';
import { IBankAccount, IBankAccountDetails } from '../../entities/bankAccounts/bankAccount';
import {
  mockClosingBankAccount,
  mockGettingBankAccountDetails,
  mockGettingBankAccountsList,
  mockGettingOperationsHistory,
  mockOpenningBankAccount, mockRefilling, mockWithdrawing,
} from './mocks/bankAccountMocks';
import { IOperation } from '../../entities/bankAccounts/operation';

mockGettingBankAccountsList();
mockGettingBankAccountDetails();

mockGettingOperationsHistory();

mockOpenningBankAccount();
mockClosingBankAccount();

mockWithdrawing();
mockRefilling();

class BankAccountRepository implements IBankAccountRepository {
  public getBankAccounts(payload: { id: string }) {
    const { id } = payload;

    return axios
      .get(`/bank-accounts?id=${id}`)
      .then((response: AxiosResponse<IBankAccount[]>) => response.data);
  }

  public getBankAccount(payload: { id: string }) {
    const { id } = payload;

    return axios
      .get(`/bank-account?id=${id}`)
      .then((response: AxiosResponse<IBankAccount>) => response.data);
  }

  public getBankAccountDetails(payload: { id: string }) {
    const { id } = payload;

    return axios
      .get(`/bank-account-details?id=${id}`)
      .then((response: AxiosResponse<IBankAccountDetails>) => response.data);
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

  public closeBankAccount(payload: { id: string }) {
    const { id } = payload;

    return axios
      .post(`/close-bank-account?id=${id}`)
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
