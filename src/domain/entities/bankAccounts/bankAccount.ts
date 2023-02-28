import { ICreditStatus } from '../credit/creditStatus';

export interface IBankAccount {
  id: string;
  accountNumber: number;
  balance: number;
  isClosed: boolean;
  isCredit: boolean;
}

export interface IBankAccountDetails extends IBankAccount {
  creditStatus?: ICreditStatus;
}
