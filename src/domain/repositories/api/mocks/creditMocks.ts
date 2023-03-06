import { mock } from './common';
import { getCreditTariffs } from './data/getCreditTariffs';

export const mockGettingCreditTariffs = () => {
  mock
    .onGet('/credit-tariffs')
    .reply(() => [200, getCreditTariffs]);
};

export const mockCreatingCreditTariff = () => {
  mock
    .onPost('/create-credit-tariff')
    .reply(() => [200]);
};

export const mockTakingLoan = () => {
  mock
    .onPost('/take-loan')
    .reply(() => [200, { bankAccountID: '34' }]);
};
