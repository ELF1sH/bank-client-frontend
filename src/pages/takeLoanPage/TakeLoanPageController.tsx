import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import jwtDecode from 'jwt-decode';

import TakeLoanPageView, { TakeLoanPageViewProps } from './TakeLoanPageView';
import { TakeLoanPageViewModel } from './TakeLoanPageViewModel';
import WithLoader from '../../components/ui/molecules/withLoader/WithLoader';
import { tokenRepository } from '../../domain/repositories/other/TokenRepository';
import { IAccessTokenPayload } from '../../domain/entities/auth/IAccessTokenPayload';

const TakeLoanPageViewWithLoader = WithLoader<TakeLoanPageViewProps>(TakeLoanPageView, true);

interface TakeLoanPageControllerProps {
  viewModel: TakeLoanPageViewModel;
}

const TakeLoanPageController: React.FC<TakeLoanPageControllerProps> = ({
  viewModel,
}) => {
  const accessToken = tokenRepository.getAccessToken();
  const payload = jwtDecode(accessToken!) as IAccessTokenPayload;
  const { roles } = payload;

  const { id } = roles.find((role) => role.role === 'client')!;

  useEffect(() => {
    viewModel.fetchTariffs();
  }, [viewModel]);

  const onClickTakeLoanBtn = () => {
    viewModel.takeLoan(viewModel.chosenTariff!, id);
  };

  return (
    <TakeLoanPageViewWithLoader
      isLoading={viewModel.isLoading}
      tariffs={viewModel.tariffs}
      chosenTariff={viewModel.chosenTariff}
      onClickCard={viewModel.chooseTariff}
      onClickTakeLoanBtn={onClickTakeLoanBtn}
    />
  );
};

export default observer(TakeLoanPageController);
