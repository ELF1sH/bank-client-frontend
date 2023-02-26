import React from 'react';
import Paragraph from 'antd/es/typography/Paragraph';
import { Table, Tag, Typography } from 'antd';
import Title from 'antd/es/typography/Title';
import Column from 'antd/es/table/Column';

import PageHeader from '../../components/ui/molecules/pageHeader/PageHeader';
import { IBankAccount } from '../../domain/entities/bankAccounts/bankAccount';
import { IOperation } from '../../domain/entities/bankAccounts/operation';
import { getOperationType } from '../../utils/enumMappers';
import { getColorByOperationType } from './helper';
import Button from '../../components/ui/atoms/button/Button';
import BackIcon from '../../components/ui/atoms/icons/BackIcon';

const { Text } = Typography;

export interface BankAccountPageViewProps {
  bankAccount: IBankAccount;
  operationsHistory: IOperation[];
  backToTheClientPage: () => void;
  closeBankAccount: () => void;
}

const BankAccountPageView: React.FC<BankAccountPageViewProps> = ({
  bankAccount,
  operationsHistory,
  backToTheClientPage,
  closeBankAccount,
}) => (
  <>
    <PageHeader header={`Bank account №${bankAccount.accountNumber}`}>
      <Button icon={<BackIcon />} onClick={backToTheClientPage}>Back to the client page</Button>
      {!bankAccount.isClosed && <Button danger type="primary" onClick={closeBankAccount}>Close the bank account</Button>}
    </PageHeader>

    <Paragraph>
      <Text strong>Current balance:</Text>
      &nbsp;
      <Text keyboard>{bankAccount.balance}</Text>
    </Paragraph>

    {
      bankAccount.isClosed && <Tag color="red">Closed</Tag>
    }
    {
      bankAccount.isCredit && <Tag color="green">Credit Bank Account</Tag>
    }

    <Title level={3}>Operations history</Title>
    <Table
      dataSource={operationsHistory}
      pagination={false}
      bordered
      rowKey={(record) => record.id}
    >
      <Column title="Id" dataIndex="id" key="id" />
      <Column title="Money" dataIndex="money" key="money" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={(_, { type }: IOperation) => (
          <Tag color={getColorByOperationType(type)}>{getOperationType(type)}</Tag>
        )}
      />
    </Table>
  </>
);

export default BankAccountPageView;
