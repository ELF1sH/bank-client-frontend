import React from 'react';
import Paragraph from 'antd/es/typography/Paragraph';
import { Card, Typography } from 'antd';

import { IBankAccountDetails } from '../../../domain/entities/bankAccounts/bankAccount';

const { Text } = Typography;

interface CreditCardProps {
  bankAccount: IBankAccountDetails;
}

const CreditCard: React.FC<CreditCardProps> = ({ bankAccount }) => (
  <Card style={{ width: '500px', margin: '20px 0' }}>
    <Paragraph>
      <Text strong>Полная сумма кредита:</Text>
      &nbsp;
      <Text keyboard>{bankAccount.creditStatus?.totalSum}</Text>
    </Paragraph>
    <Paragraph>
      <Text strong>Общее количество выплат:</Text>
      &nbsp;
      <Text>{bankAccount.creditStatus?.totalNumberOfPayments}</Text>
    </Paragraph>
    <Paragraph>
      <Text strong>Сумма одной выплаты:</Text>
      &nbsp;
      <Text keyboard>{bankAccount.creditStatus?.onePaymentSum}</Text>
    </Paragraph>
    <Paragraph>
      <Text strong>Выплат совершено:</Text>
      &nbsp;
      <Text>{bankAccount.creditStatus?.paymentsCompleted}</Text>
    </Paragraph>
    <Paragraph>
      <Text strong>Задолженность:</Text>
      &nbsp;
      <Text keyboard>{bankAccount.creditStatus?.debt}</Text>
    </Paragraph>
    <Paragraph>
      <Text strong>Название тарифа:</Text>
      &nbsp;
      <Text>{bankAccount.creditStatus?.creditTariff.name}</Text>
    </Paragraph>
    <Paragraph style={{ marginBottom: 0 }}>
      <Text strong>Процентная ставка:</Text>
      &nbsp;
      <Text>
        {bankAccount.creditStatus?.creditTariff.interestRate}
        %
      </Text>
    </Paragraph>
  </Card>
);

export default CreditCard;
