import React from 'react';
import Paragraph from 'antd/es/typography/Paragraph';
import {
  Card,
  Table, Tag, Typography,
} from 'antd';
import Title from 'antd/es/typography/Title';
import Column from 'antd/es/table/Column';

import PageHeader from '../../components/ui/molecules/pageHeader/PageHeader';
import { IBankAccount, IBankAccountDetails } from '../../domain/entities/bankAccounts/bankAccount';
import { IOperation } from '../../domain/entities/bankAccounts/operation';
import { getOperationType } from '../../utils/enumMappers';
import { getColorByOperationType } from './helper';
import Button from '../../components/ui/atoms/button/Button';
import BackIcon from '../../components/ui/atoms/icons/BackIcon';
import MinusIcon from '../../components/ui/atoms/icons/MinusIcon';
import PlusIcon from '../../components/ui/atoms/icons/PlusIcon';
import InputNumber from '../../components/ui/atoms/input/InputNumber';
import BalanceCard from './components/BalanceCard';
import CreditCard from './components/CreditCard';

const { Text } = Typography;

export interface BankAccountPageViewProps {
  bankAccount: IBankAccountDetails;
  operationsHistory: IOperation[];
  withdrawSum: number;
  refillSum: number;
  updateWithdrawSum: (val: number) => void;
  updateRefillSum: (val: number) => void;
  backToTheClientPage: () => void;
  closeBankAccount: () => void;
  withdraw: () => void;
  refill: () => void;
}

const BankAccountPageView: React.FC<BankAccountPageViewProps> = ({
  bankAccount,
  operationsHistory,
  withdrawSum,
  refillSum,
  updateWithdrawSum,
  updateRefillSum,
  backToTheClientPage,
  closeBankAccount,
  withdraw,
  refill,
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
    {
      !bankAccount.isClosed && (
        <BalanceCard
          refillSum={refillSum}
          updateRefillSum={updateRefillSum}
          withdraw={withdraw}
          withdrawSum={withdrawSum}
          updateWithdrawSum={updateWithdrawSum}
          refill={refill}
        />
      )
    }
    {
      !bankAccount.isClosed && bankAccount.isCredit && (
        <CreditCard bankAccount={bankAccount} />
      )
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
