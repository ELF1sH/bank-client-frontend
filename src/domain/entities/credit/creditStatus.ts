export interface ICreditStatus {
  id: string;
  totalSum: number;
  numberOfPayments: number;
  onePaymentSum: number;
  paymentsCompleted: number;
  debt: number;
}
