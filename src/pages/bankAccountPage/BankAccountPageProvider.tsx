import React from 'react';

import BankAccountPageController from './BankAccountPageController';
import { GetBankAccountUseCase } from '../../domain/useCases/bankAccounts/GetBankAccountUseCase';
import { bankAccountRepository } from '../../domain/repositories/api/BankAccountRepository';
import { useNotifications } from '../../modules/notification/useNotifications';
import { BankAccountPageViewModel } from './BankAccountPageViewModel';
import { GetOperationsHistoryUseCase } from '../../domain/useCases/bankAccounts/GetOperationsHistoryUseCase';

const BankAccountPageProvider: React.FC = () => {
  const { onError } = useNotifications();

  const getBankAccountUseCase = new GetBankAccountUseCase(bankAccountRepository, onError);

  const getOperationsHistoryUseCase = new GetOperationsHistoryUseCase(
    bankAccountRepository,
    onError,
  );

  const viewModel = new BankAccountPageViewModel(
    getBankAccountUseCase,
    getOperationsHistoryUseCase,
  );

  return (
    <BankAccountPageController viewModel={viewModel} />
  );
};

export default BankAccountPageProvider;
