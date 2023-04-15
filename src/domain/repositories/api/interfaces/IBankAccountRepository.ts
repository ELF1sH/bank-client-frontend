import { IBankAccount } from '../../../entities/bankAccounts/bankAccount';
import { IOperation } from '../../../entities/bankAccounts/operation';

export interface IBankAccountRepository {
  getBankAccounts: (payload: { id: string }) => Promise<IBankAccount[]>;
  getBankAccount: (payload: { id: string }) => Promise<IBankAccount>;
  getOperationsHistory: (payload: { id: string }) => Promise<IOperation[]>;
  createBankAccount: (payload: { ownerId: string }) => Promise<{ id: string }>;
  closeBankAccount: (payload: { id: string }) => Promise<void>;
  withdrawMoney: (payload: IOperationPayload) => Promise<void>;
  refillMoney: (payload: IOperationPayload) => Promise<void>;
  sendMoney: (payload: ISendMoneyPayload) => Promise<void>;
}

export interface IOperationPayload {
  id: string;
  money: number;
}

export interface ISendMoneyPayload {
  receiverId: string;
  senderId: string;
  money: number;
}
