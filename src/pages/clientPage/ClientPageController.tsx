import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import jwtDecode from 'jwt-decode';

import ClientPageView, { ClientPageViewProps } from './ClientPageView';
import { ClientPageViewModel } from './ClientPageViewModel';
import WithLoader from '../../components/ui/molecules/withLoader/WithLoader';
import { tokenRepository } from '../../domain/repositories/other/TokenRepository';
import { IAccessTokenPayload } from '../../domain/entities/auth/IAccessTokenPayload';

const ClientPageViewWithLoader = WithLoader<ClientPageViewProps>(ClientPageView, true);

interface ClientPageControllerProps {
  viewModel: ClientPageViewModel;
}

const ClientPageController: React.FC<ClientPageControllerProps> = ({
  viewModel,
}) => {
  const accessToken = tokenRepository.getAccessToken();
  const payload = jwtDecode(accessToken!) as IAccessTokenPayload;
  const { roles } = payload;

  const { id } = roles.find((role) => role.role === 'client')!;

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
