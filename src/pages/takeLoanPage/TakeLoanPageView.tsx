import React from 'react';
import { Card, Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';

import PageHeader from '../../components/ui/molecules/pageHeader/PageHeader';
import { ICreditTariff } from '../../domain/entities/credit/creditTariff';
import Button from '../../components/ui/atoms/button/Button';

const { Text } = Typography;

export interface TakeLoanPageViewProps {
  tariffs: ICreditTariff[];
  chosenTariff?: string;
  onClickCard: (value: string) => void;
  onClickTakeLoanBtn: () => void;
}

const TakeLoanPageView: React.FC<TakeLoanPageViewProps> = ({
  tariffs,
  chosenTariff,
  onClickCard,
  onClickTakeLoanBtn,
}) => (
  <>
    <PageHeader header="Take a loan" />

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
      {
        tariffs.map((tariff, idx) => (
          <Card
            title={tariff.name}
            key={tariff.id}
            hoverable
            style={{ border: `${chosenTariff === tariff.id ? '1px solid red' : ''}` }}
            onClick={() => onClickCard(tariff.id)}
          >
            <Paragraph>
              <Text strong>Interest rate:</Text>
              &nbsp;
              {tariff.percent}
              %
            </Paragraph>
            <Paragraph>
              <Text strong>Sum:</Text>
              &nbsp;
              {tariff.balance}
            </Paragraph>
          </Card>
        ))
      }
    </div>

    <Button
      type="primary"
      style={{ margin: '30px auto' }}
      onClick={() => onClickTakeLoanBtn()}
    >
      Take the loan!
    </Button>
  </>
);

export default TakeLoanPageView;
