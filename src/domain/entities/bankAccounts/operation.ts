export interface IOperation {
  id: string;
  amount: number;
  status: string;
  date: string;
}

export enum OperationType {
  Withdrawal = 0,
  Incoming = 1,
  CreditRepayment = 2,
  CreditIncoming = 3,
}
