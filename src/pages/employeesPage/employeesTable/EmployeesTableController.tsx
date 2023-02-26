import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { TablePaginationConfig } from 'antd';
import { useNavigate } from 'react-router-dom';

import EmployeesTableView, { ClientsTableViewProps } from './EmployeesTableView';
import { EmployeesTableViewModel } from './EmployeesTableViewModel';
import WithLoader from '../../../components/ui/molecules/withLoader/WithLoader';

const ClientsTableViewWithLoader = WithLoader<ClientsTableViewProps>(EmployeesTableView, true);

interface ClientsTableControllerProps {
  viewModel: EmployeesTableViewModel;
}

const EmployeesTableController: React.FC<ClientsTableControllerProps> = ({ viewModel }) => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await viewModel.getEmployees();
    })();
  }, [viewModel]);

  const onChangeTablePagination = (pagination: TablePaginationConfig) => {
    (async () => {
      await viewModel.onChangePagination(pagination);
    })();
  };

  const onClickRow = (id: string) => {
    navigate(id);
  };

  return (
    <ClientsTableViewWithLoader
      isLoading={viewModel.isLoading}
      pagination={viewModel.pagination}
      dataSource={viewModel.employees}
      onChange={onChangeTablePagination}
      onClickRow={onClickRow}
    />
  );
};

export default observer(EmployeesTableController);
