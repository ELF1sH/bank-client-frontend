import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await viewModel.getClient(id ?? '');
      await viewModel.getBankAccounts(id ?? '');
    })();
  }, [viewModel, id]);

  const onClickBankAccountRow = (id: string) => {
    navigate(`/bank-accounts/${id}`);
  };

  return (
    <ClientPageViewWithLoader
      isLoading={viewModel.isLoading}
      client={viewModel.client!}
      bankAccounts={viewModel.bankAccounts}
      onClickBankAccountRow={onClickBankAccountRow}
    />
  );
};

export default observer(ClientPageController);
