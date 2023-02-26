import { mock } from './common';
import { getBankAccounts } from './data/getBankAccounts';
import { getBankAccount, getBankAccountClosed } from './data/getBankAccount';
import { getOperationsHistory } from './data/getOperationsHistory';

export const mockGettingBankAccountsList = () => {
  mock
    .onGet(/\/bank-accounts\?id=*/)
    .reply(() => [200, getBankAccounts]);
};

export const mockGettingBankAccount = () => {
  mock
    .onGet(/\/bank-account\?id=*/)
    .reply(() => [200, getBankAccount]);
};

export const mockGettingOperationsHistory = () => {
  mock
    .onGet(/\/operations-history\?id=*/)
    .reply(() => [200, getOperationsHistory]);
};

export const mockOpenningBankAccount = () => {
  mock
    .onGet('/open-bank-account')
    .reply(() => [200, getBankAccount]);
};

export const mockClosingBankAccount = () => {
  mock
    .onPost(/\/close-bank-account\?id=.*/)
    .reply(() => [200, getBankAccountClosed]);
};
