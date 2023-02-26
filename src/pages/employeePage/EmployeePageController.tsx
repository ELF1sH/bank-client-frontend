import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import EmployeePageView, { EmployeePageViewProps } from './EmployeePageView';
import { EmployeePageViewModel } from './EmployeePageViewModel';
import WithLoader from '../../components/ui/molecules/withLoader/WithLoader';

const EmployeePageViewWithLoader = WithLoader<EmployeePageViewProps>(EmployeePageView, true);

interface EmployeePageControllerProps {
  viewModel: EmployeePageViewModel;
}

const EmployeePageController: React.FC<EmployeePageControllerProps> = ({
  viewModel,
}) => {
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await viewModel.getEmployee(id ?? '');
    })();
  }, [viewModel, id]);

  const backToEmployeesList = () => {
    navigate('/employees');
  };

  return (
    <EmployeePageViewWithLoader
      isLoading={viewModel.isLoading}
      employee={viewModel.employee!}
      blockUser={() => viewModel.blockUser(id!)}
      backToEmployeesList={backToEmployeesList}
    />
  );
};

export default observer(EmployeePageController);
