import { ICreditTariff } from './creditTariff';

export interface ICreditStatus {
  totalSum: number;
  totalNumberOfPayments: number;
  onePaymentSum: number;
  paymentsCompleted: number;
  debt: number;
  creditTariff: ICreditTariff;
}
