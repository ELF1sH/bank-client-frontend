import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { TablePaginationConfig } from 'antd';
import { useNavigate } from 'react-router-dom';

import ClientsTableView, { ClientsTableViewProps } from './ClientsTableView';
import { ClientsTableViewModel } from './ClientsTableViewModel';
import WithLoader from '../../../components/ui/molecules/withLoader/WithLoader';

const ClientsTableViewWithLoader = WithLoader<ClientsTableViewProps>(ClientsTableView, true);

interface ClientsTableControllerProps {
  viewModel: ClientsTableViewModel;
}

const ClientsTableController: React.FC<ClientsTableControllerProps> = ({ viewModel }) => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await viewModel.getClients();
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
      dataSource={viewModel.clients}
      onChange={onChangeTablePagination}
      onClickRow={onClickRow}
    />
  );
};

export default observer(ClientsTableController);
