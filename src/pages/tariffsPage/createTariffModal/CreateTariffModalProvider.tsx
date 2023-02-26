import React from 'react';

import CreateTariffModalController from './CreateTariffModalController';
import { useNotifications } from '../../../modules/notification/useNotifications';
import { CreateTariffModalViewModel } from './CreateTariffModalViewModel';
import { CreateCreditTariffUseCase } from '../../../domain/useCases/credits/CreateCreditTariffUseCase';
import { creditRepository } from '../../../domain/repositories/api/CreditRepository';

const CreateTariffModalProvider: React.FC = () => {
  const { onError, onSuccess } = useNotifications();

  const createCreditTariffUseCase = new CreateCreditTariffUseCase(
    creditRepository,
    onError,
    onSuccess,
  );

  const viewModel = new CreateTariffModalViewModel(
    createCreditTariffUseCase,
  );

  return (
    <CreateTariffModalController viewModel={viewModel} />
  );
};

export default CreateTariffModalProvider;
