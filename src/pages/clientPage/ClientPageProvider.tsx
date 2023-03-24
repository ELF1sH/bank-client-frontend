import React from 'react';
import { useNavigate } from 'react-router-dom';

import ClientPageController from './ClientPageController';
import { clientsRepository } from '../../domain/repositories/api/ClientsRepository';
import { useNotifications } from '../../modules/notification/useNotifications';
import { ClientPageViewModel } from './ClientPageViewModel';
import { GetClientUseCase } from '../../domain/useCases/clients/GetClientUseCase';
import { GetBankAccountsUseCase } from '../../domain/useCases/bankAccounts/GetBankAccountsUseCase';
import { bankAccountRepository } from '../../domain/repositories/api/BankAccountRepository';
import { GetCreditAccountsUseCase } from '../../domain/useCases/credits/GetCreditAccountsUseCase';
import { creditRepository } from '../../domain/repositories/api/CreditRepository';
import { CreateBankAccountUseCase } from '../../domain/useCases/bankAccounts/CreateBankAccountUseCase';

const ClientPageProvider: React.FC = () => {
  const { onError, onSuccess } = useNotifications();

  const navigate = useNavigate();

  const getClientUseCase = new GetClientUseCase(clientsRepository.getClient, onError);

  const getBankAccountsUseCase = new GetBankAccountsUseCase(
    bankAccountRepository.getBankAccounts,
    onError,
  );

  const getCreditAccountsUseCase = new GetCreditAccountsUseCase(
    creditRepository.getCreditAccounts,
    onError,
  );

  const createBankAccountUseCase = new CreateBankAccountUseCase(
    bankAccountRepository.createBankAccount,
    onError,
    onSuccess,
  );

  const viewModel = new ClientPageViewModel(
    getClientUseCase,
    getBankAccountsUseCase,
    getCreditAccountsUseCase,
    createBankAccountUseCase,
    navigate,
  );

  return (
    <ClientPageController viewModel={viewModel} />
  );
};

export default ClientPageProvider;
