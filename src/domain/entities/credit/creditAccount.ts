export interface ICreditAccount {
  id: string;
  balance: number;
  ownerId: string;
  debt: number;
  accountNumber: string;
  tariffId: string;
  isClosed: boolean;
  percent: number;
}
