import React from 'react';
import { useNavigate } from 'react-router-dom';

import TakeLoanPageController from './TakeLoanPageController';
import { TakeLoanPageViewModel } from './TakeLoanPageViewModel';
import { GetCreditTariffsUseCase } from '../../domain/useCases/credits/GetCreditTariffsUseCase';
import { creditRepository } from '../../domain/repositories/api/CreditRepository';
import { useNotifications } from '../../modules/notification/useNotifications';
import { TakeLoanUseCase } from '../../domain/useCases/credits/TakeLoanUseCase';

const TakeLoanPageProvider: React.FC = () => {
  const { onError, onSuccess } = useNotifications();

  const navigate = useNavigate();

  const getCreditTariffsUseCase = new GetCreditTariffsUseCase(
    creditRepository.getCreditTariffs,
    onError,
  );

  const takeLoanUseCase = new TakeLoanUseCase(
    creditRepository.takeLoan,
    onError,
    onSuccess,
  );

  const viewModel = new TakeLoanPageViewModel(getCreditTariffsUseCase, takeLoanUseCase, navigate);

  return (
    <TakeLoanPageController viewModel={viewModel} />
  );
};

export default TakeLoanPageProvider;
