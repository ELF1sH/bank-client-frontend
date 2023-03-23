import { IUser } from './user';

export interface IClient extends IUser {
  numberOfBankAccounts: number;
  numberOfCredits: number;
}

export interface ICreateClientPayload {
  firstName: string;
  lastName: string;
}
