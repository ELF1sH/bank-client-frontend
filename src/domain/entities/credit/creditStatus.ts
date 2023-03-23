import { ICreditTariff } from './creditTariff';

export interface ICreditAccount {
  id: string;
  balance: number;
  debt: number;
  accountNumber: number;
  tariffId: string;
  isClosed: boolean;
  percent: number;
}
