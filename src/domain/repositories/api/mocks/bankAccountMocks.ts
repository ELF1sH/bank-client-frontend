import { mock } from './common';
import { getBankAccounts } from './data/getBankAccounts';
import { getBankAccount, getBankAccountClosed } from './data/getBankAccount';
import { getOperationsHistory } from './data/getOperationsHistory';
import { getBankAccountDetails } from './data/getBankAccountDetails';

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

export const mockGettingBankAccountDetails = () => {
  mock
    .onGet(/\/bank-account-details\?id=*/)
    .reply(() => [200, getBankAccountDetails]);
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

export const mockWithdrawing = () => {
  mock
    .onPost(/\/withdraw/)
    .reply(() => [200, getBankAccount]);
};

export const mockRefilling = () => {
  mock
    .onPost(/\/refill/)
    .reply(() => [200, getBankAccount]);
};
