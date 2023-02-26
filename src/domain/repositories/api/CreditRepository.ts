import axios, { AxiosResponse } from 'axios';

import { ICreditRepository } from './interfaces/ICreditRepository';
import { ICreateCreditTariffPayload, ICreditTariff } from '../../entities/credit/creditTariff';
import { mockCreatingCreditTariff, mockGettingCreditTariffs } from './mocks/creditMocks';

mockGettingCreditTariffs();
mockCreatingCreditTariff();

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
}

export const creditRepository = new CreditRepository();
