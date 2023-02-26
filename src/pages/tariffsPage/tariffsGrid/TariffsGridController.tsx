import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import TariffsGridView, { TariffsGridViewProps } from './TariffsGridView';
import { TariffsGridViewModel } from './TariffsGridViewModel';
import WithLoader from '../../../components/ui/molecules/withLoader/WithLoader';

const TariffsGridViewWithLoader = WithLoader<TariffsGridViewProps>(TariffsGridView, true);

interface TariffsGridControllerProps {
  viewModel: TariffsGridViewModel;
}

const TariffsGridController: React.FC<TariffsGridControllerProps> = ({ viewModel }) => {
  useEffect(() => {
    (async () => {
      await viewModel.fetchTariffs();
    })();
  }, [viewModel]);

  return (
    <TariffsGridViewWithLoader
      isLoading={viewModel.isLoading}
      tariffs={viewModel.tariffs}
    />
  );
};

export default observer(TariffsGridController);
