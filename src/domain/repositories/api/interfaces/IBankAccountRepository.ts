import { IBankAccount } from '../../../entities/bankAccounts/bankAccount';
import { IOperation } from '../../../entities/bankAccounts/operation';

export interface IBankAccountRepository {
  getBankAccounts: (id: string) => Promise<IBankAccount[]>;
  getBankAccount: (id: string) => Promise<IBankAccount>;
  getOperationsHistory: (id: string) => Promise<IOperation[]>;
  openBankAccount: () => Promise<IBankAccount>;
  closeBankAccount: (bankAccountId: string) => Promise<IBankAccount>;
  withdrawMoney: (payload: IOperationPayload) => Promise<IBankAccount>;
  refillMoney: (payload: IOperationPayload) => Promise<IBankAccount>;
}

export interface IOperationPayload {
  bankAccountId: string;
  sum: number;
}
