import React from 'react';

import ClientPageController from './ClientPageController';
import { clientsRepository } from '../../domain/repositories/api/ClientsRepository';
import { useNotifications } from '../../modules/notification/useNotifications';
import { ClientPageViewModel } from './ClientPageViewModel';
import { GetClientUseCase } from '../../domain/useCases/clients/GetClientUseCase';
import { GetBankAccountsUseCase } from '../../domain/useCases/bankAccounts/GetBankAccountsUseCase';
import { bankAccountRepository } from '../../domain/repositories/api/BankAccountRepository';

const ClientPageProvider: React.FC = () => {
  const { onError } = useNotifications();

  const getClientUseCase = new GetClientUseCase(clientsRepository, onError);

  const getBankAccountsUseCase = new GetBankAccountsUseCase(bankAccountRepository, onError);

  const viewModel = new ClientPageViewModel(
    getClientUseCase,
    getBankAccountsUseCase,
  );

  return (
    <ClientPageController viewModel={viewModel} />
  );
};

export default ClientPageProvider;
