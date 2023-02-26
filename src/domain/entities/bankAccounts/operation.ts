export interface IOperation {
  id: string;
  money: number;
  type: OperationType;
}

export enum OperationType {
  Withdrawal = 0,
  Incoming = 1,
  CreditRepayment = 2,
  CreditIncoming = 3,
}
