import React from 'react';

import BankAccountPageController from './BankAccountPageController';
import { GetBankAccountUseCase } from '../../domain/useCases/bankAccounts/GetBankAccountUseCase';
import { bankAccountRepository } from '../../domain/repositories/api/BankAccountRepository';
import { useNotifications } from '../../modules/notification/useNotifications';
import { BankAccountPageViewModel } from './BankAccountPageViewModel';
import { GetOperationsHistoryUseCase } from '../../domain/useCases/bankAccounts/GetOperationsHistoryUseCase';
import { CloseBankAccountUseCase } from '../../domain/useCases/bankAccounts/CloseBankAccountUseCase';
import { WithdrawMoneyUseCase } from '../../domain/useCases/bankAccounts/WithdrawMoneyUseCase';
import { RefillMoneyUseCase } from '../../domain/useCases/bankAccounts/RefillMoneyUseCase';

const BankAccountPageProvider: React.FC = () => {
  const { onError, onSuccess } = useNotifications();

  const getBankAccountUseCase = new GetBankAccountUseCase(bankAccountRepository, onError);

  const getOperationsHistoryUseCase = new GetOperationsHistoryUseCase(
    bankAccountRepository,
    onError,
  );

  const closeBankAccountUseCase = new CloseBankAccountUseCase(
    bankAccountRepository,
    onError,
    onSuccess,
  );

  const withdrawMoneyUseCase = new WithdrawMoneyUseCase(
    bankAccountRepository,
    onError,
    onSuccess,
  );

  const refillMoneyUseCase = new RefillMoneyUseCase(
    bankAccountRepository,
    onError,
    onSuccess,
  );

  const viewModel = new BankAccountPageViewModel(
    getBankAccountUseCase,
    getOperationsHistoryUseCase,
    closeBankAccountUseCase,
    withdrawMoneyUseCase,
    refillMoneyUseCase,
  );

  return (
    <BankAccountPageController viewModel={viewModel} />
  );
};

export default BankAccountPageProvider;
