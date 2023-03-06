export interface ICreditTariff {
  id: string;
  name: string;
  interestRate: number;
  sum: number;
}

export interface ICreateCreditTariffPayload {
  name: string;
  interestRate: number;
}
