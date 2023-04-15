import React from 'react';

import BankAccountPageController from './BankAccountPageController';
import { bankAccountRepository } from '../../domain/repositories/api/BankAccountRepository';
import { useNotifications } from '../../modules/notification/useNotifications';
import { BankAccountPageViewModel } from './BankAccountPageViewModel';
import { GetOperationsHistoryUseCase } from '../../domain/useCases/bankAccounts/GetOperationsHistoryUseCase';
import { CloseBankAccountUseCase } from '../../domain/useCases/bankAccounts/CloseBankAccountUseCase';
import { WithdrawMoneyUseCase } from '../../domain/useCases/bankAccounts/WithdrawMoneyUseCase';
import { RefillMoneyUseCase } from '../../domain/useCases/bankAccounts/RefillMoneyUseCase';
import { GetBankAccountUseCase } from '../../domain/useCases/bankAccounts/GetBankAccountUseCase';
import { SendMoneyUseCase } from '../../domain/useCases/bankAccounts/SendMoneyUseCase';

const BankAccountPageProvider: React.FC = () => {
  const { onError, onSuccess } = useNotifications();

  const getBankAccountDetailsUseCase = new GetBankAccountUseCase(
    bankAccountRepository.getBankAccount,
    onError,
  );

  const getOperationsHistoryUseCase = new GetOperationsHistoryUseCase(
    bankAccountRepository.getOperationsHistory,
    onError,
  );

  const closeBankAccountUseCase = new CloseBankAccountUseCase(
    bankAccountRepository.closeBankAccount,
    onError,
    onSuccess,
  );

  const withdrawMoneyUseCase = new WithdrawMoneyUseCase(
    bankAccountRepository.withdrawMoney,
    onError,
    onSuccess,
  );

  const refillMoneyUseCase = new RefillMoneyUseCase(
    bankAccountRepository.refillMoney,
    onError,
    onSuccess,
  );

  const sendMoneyUseCase = new SendMoneyUseCase(
    bankAccountRepository.sendMoney,
    onError,
    onSuccess,
  );

  const viewModel = new BankAccountPageViewModel(
    getBankAccountDetailsUseCase,
    getOperationsHistoryUseCase,
    closeBankAccountUseCase,
    withdrawMoneyUseCase,
    refillMoneyUseCase,
    sendMoneyUseCase,
  );

  return (
    <BankAccountPageController viewModel={viewModel} />
  );
};

export default BankAccountPageProvider;
