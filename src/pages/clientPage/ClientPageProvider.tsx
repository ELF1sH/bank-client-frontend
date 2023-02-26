import React from 'react';
import { useNavigate } from 'react-router-dom';

import ClientPageController from './ClientPageController';
import { clientsRepository } from '../../domain/repositories/api/ClientsRepository';
import { useNotifications } from '../../modules/notification/useNotifications';
import { ClientPageViewModel } from './ClientPageViewModel';
import { GetClientUseCase } from '../../domain/useCases/clients/GetClientUseCase';
import { GetBankAccountsUseCase } from '../../domain/useCases/bankAccounts/GetBankAccountsUseCase';
import { bankAccountRepository } from '../../domain/repositories/api/BankAccountRepository';
import { OpenBankAccountUseCase } from '../../domain/useCases/bankAccounts/OpenBankAccountUseCase';

const ClientPageProvider: React.FC = () => {
  const { onError, onSuccess } = useNotifications();
  const navigate = useNavigate();

  const getClientUseCase = new GetClientUseCase(clientsRepository, onError);

  const getBankAccountsUseCase = new GetBankAccountsUseCase(bankAccountRepository, onError);

  const openBankAccountUseCase = new OpenBankAccountUseCase(
    bankAccountRepository,
    onError,
    onSuccess,
  );

  const viewModel = new ClientPageViewModel(
    getClientUseCase,
    getBankAccountsUseCase,
    openBankAccountUseCase,
    navigate,
  );

  return (
    <ClientPageController viewModel={viewModel} />
  );
};

export default ClientPageProvider;
