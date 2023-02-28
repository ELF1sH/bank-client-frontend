import React, { memo } from 'react';

import TariffsGridController from './TariffsGridController';
import { TariffsGridViewModel } from './TariffsGridViewModel';
import { useNotifications } from '../../../modules/notification/useNotifications';
import { GetCreditTariffsUseCase } from '../../../domain/useCases/credits/GetCreditTariffsUseCase';
import { creditRepository } from '../../../domain/repositories/api/CreditRepository';

const TariffsGridProvider: React.FC = () => {
  const { onError } = useNotifications();

  const getTariffsUseCase = new GetCreditTariffsUseCase(creditRepository.getCreditTariffs, onError);

  const viewModel = new TariffsGridViewModel(getTariffsUseCase);

  return (
    <TariffsGridController viewModel={viewModel} />
  );
};

export default memo(TariffsGridProvider);
