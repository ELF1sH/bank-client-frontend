export interface ICreditTariff {
  id: string;
  name: string;
  percent: number;
  balance: number;
}

export interface ICreateCreditTariffPayload {
  name: string;
  percent: number;
}
