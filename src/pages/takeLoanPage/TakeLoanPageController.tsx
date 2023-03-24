import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import TakeLoanPageView, { TakeLoanPageViewProps } from './TakeLoanPageView';
import { TakeLoanPageViewModel } from './TakeLoanPageViewModel';
import WithLoader from '../../components/ui/molecules/withLoader/WithLoader';

const TakeLoanPageViewWithLoader = WithLoader<TakeLoanPageViewProps>(TakeLoanPageView, true);

interface TakeLoanPageControllerProps {
  viewModel: TakeLoanPageViewModel;
}

const TakeLoanPageController: React.FC<TakeLoanPageControllerProps> = ({
  viewModel,
}) => {
  useEffect(() => {
    viewModel.fetchTariffs();
  }, [viewModel]);

  const onClickTakeLoanBtn = () => {
    // TODO: ID IS HARDCODED
    viewModel.takeLoan(viewModel.chosenTariff!, '2');
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
