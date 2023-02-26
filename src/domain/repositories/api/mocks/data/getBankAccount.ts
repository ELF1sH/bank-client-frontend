import { IBankAccount } from '../../../../entities/bankAccounts/bankAccount';

export const getBankAccount: IBankAccount = {
  id: '1',
  accountNumber: 235236464,
  balance: 345.35,
  isClosed: false,
  isCredit: true,
};

export const getBankAccountClosed: IBankAccount = {
  id: '1',
  accountNumber: 235236464,
  balance: 345.35,
  isClosed: true,
  isCredit: true,
};
