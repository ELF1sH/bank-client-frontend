import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import ClientPageView, { ClientPageViewProps } from './ClientPageView';
import { ClientPageViewModel } from './ClientPageViewModel';
import WithLoader from '../../components/ui/molecules/withLoader/WithLoader';

const ClientPageViewWithLoader = WithLoader<ClientPageViewProps>(ClientPageView, true);

interface ClientPageControllerProps {
  viewModel: ClientPageViewModel;
}

const ClientPageController: React.FC<ClientPageControllerProps> = ({
  viewModel,
}) => {
  // TODO: NEED TO PARSE IT FROM A JWT TOKEN
  const id = '2';

  const navigate = useNavigate();

  useEffect(() => {
    viewModel.init(id);
  }, [viewModel, id]);

  const onClickBankAccountRow = (id: string) => {
    navigate(`/bank-accounts/${id}`);
  };

  const onClickCreditAccountRow = (id: string) => {
    navigate(`/credit-accounts/${id}`);
  };

  const createBankAccount = () => {
    // TODO: ID IS HARDCODED
    viewModel.createBankAccount(id);
  };

  return (
    <ClientPageViewWithLoader
      isLoading={viewModel.isLoading}
      client={viewModel.client!}
      bankAccounts={viewModel.bankAccounts}
      creditAccounts={viewModel.creditAccounts}
      onClickBankAccountRow={onClickBankAccountRow}
      onClickCreditAccountRow={onClickCreditAccountRow}
      createBankAccount={createBankAccount}
    />
  );
};

export default observer(ClientPageController);
