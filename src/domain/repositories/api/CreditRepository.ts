import axios, { AxiosResponse } from 'axios';

import { ICreditRepository, ITakeLoanPayload, ITakeLoanResponse } from './interfaces/ICreditRepository';
import { ICreateCreditTariffPayload, ICreditTariff } from '../../entities/credit/creditTariff';

class CreditRepository implements ICreditRepository {
  public getCreditTariffs(): Promise<ICreditTariff[]> {
    return axios
      .get('/credit-tariffs')
      .then((response: AxiosResponse<ICreditTariff[]>) => response.data);
  }

  public createCreditTariff(payload: ICreateCreditTariffPayload): Promise<void> {
    return axios
      .post('/create-credit-tariff', payload);
  }

  public takeLoan(payload: ITakeLoanPayload): Promise<ITakeLoanResponse> {
    return axios
      .post('/take-loan', payload)
      .then((response: AxiosResponse<ITakeLoanResponse>) => response.data);
  }
}

export const creditRepository = new CreditRepository();
