import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';

import BankAccountPageView, { BankAccountPageViewProps } from './BankAccountPageView';
import { BankAccountPageViewModel } from './BankAccountPageViewModel';
import WithLoader from '../../components/ui/molecules/withLoader/WithLoader';

const BankAccountPageViewWithLoader = WithLoader<BankAccountPageViewProps>(
  BankAccountPageView,
  true,
);

interface BankAccountPageControllerProps {
  viewModel: BankAccountPageViewModel;
}

const BankAccountPageController: React.FC<BankAccountPageControllerProps> = ({
  viewModel,
}) => {
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await viewModel.getBankAccount(id!);

      await viewModel.getOperationsHistory(id!);
    })();
  }, [viewModel, id]);

  const backToTheClientPage = () => {
    navigate(-1);
  };

  return (
    <BankAccountPageViewWithLoader
      isLoading={viewModel.isLoading}
      bankAccount={viewModel.bankAccount!}
      operationsHistory={viewModel.operationsHistory!}
      withdrawSum={viewModel.withdrawSum}
      refillSum={viewModel.refillSum}
      updateWithdrawSum={viewModel.updateWithdrawSum}
      updateRefillSum={viewModel.updateRefillSum}
      backToTheClientPage={backToTheClientPage}
      closeBankAccount={() => viewModel.closeBankAccount()}
      withdraw={() => viewModel.withdraw()}
      refill={() => viewModel.refill()}
    />
  );
};

export default observer(BankAccountPageController);
