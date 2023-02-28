import { IBankAccount } from '../../../entities/bankAccounts/bankAccount';
import { IOperation } from '../../../entities/bankAccounts/operation';

export interface IBankAccountRepository {
  getBankAccounts: (payload: { id: string }) => Promise<IBankAccount[]>;
  getBankAccount: (payload: { id: string }) => Promise<IBankAccount>;
  getOperationsHistory: (payload: { id: string }) => Promise<IOperation[]>;
  openBankAccount: () => Promise<IBankAccount>;
  closeBankAccount: (payload: { id: string }) => Promise<IBankAccount>;
  withdrawMoney: (payload: IOperationPayload) => Promise<IBankAccount>;
  refillMoney: (payload: IOperationPayload) => Promise<IBankAccount>;
}

export interface IOperationPayload {
  bankAccountId: string;
  sum: number;
}
