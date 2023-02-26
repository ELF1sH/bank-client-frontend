import React from 'react';
import {
  Table, TablePaginationConfig, Tag,
} from 'antd';

import { IClient } from '../../../domain/entities/users/client';
import { IEmployee } from '../../../domain/entities/users/employee';
import { getJobPosition } from '../../../utils/enumMappers';
import { getJobPositionColor } from './helper';

const { Column, ColumnGroup } = Table;

export interface ClientsTableViewProps {
  pagination: TablePaginationConfig;
  dataSource: IEmployee[];
  onChange: (pagination: TablePaginationConfig) => void;
  onClickRow: Function;
}

const EmployeesTableView: React.FC<ClientsTableViewProps> = ({
  pagination,
  dataSource,
  onChange,
  onClickRow,
}) => (
  <Table
    dataSource={dataSource}
    pagination={pagination}
    bordered
    onChange={onChange}
    onRow={(record: IEmployee) => ({
      onClick: () => onClickRow(record.id),
    })}
    rowKey={(record) => record.id}
  >
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
      <Column title="Middle Name" dataIndex="lastName" key="middleName" />
    </ColumnGroup>
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(_, { jobPosition, isBlocked }: IEmployee) => (
        <>
          <Tag color={getJobPositionColor(jobPosition)}>{getJobPosition(jobPosition)}</Tag>
          {isBlocked && <Tag color="red">Blocked</Tag>}
        </>
      )}
    />
  </Table>
);

export default EmployeesTableView;
