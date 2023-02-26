import { mock } from './common';
import { getBankAccounts } from './data/getBankAccounts';
import { getBankAccount } from './data/getBankAccount';
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
