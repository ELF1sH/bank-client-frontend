import React from 'react';
import { Card, Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';

import { ICreditTariff } from '../../../domain/entities/credit/creditTariff';
import CreateCreditTariffModal from '../createTariffModal/CreateTariffModalProvider';

const { Text } = Typography;

export interface TariffsGridViewProps {
  tariffs: ICreditTariff[];
}

const TariffsGridView: React.FC<TariffsGridViewProps> = ({
  tariffs,
}) => (
  <>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
      {
        tariffs.map((tariff) => (
          <Card title={tariff.name} key={tariff.id} hoverable>
            <Paragraph>
              <Text strong>Interest rate:</Text>
              &nbsp;
              {tariff.interestRate}
              %
            </Paragraph>
          </Card>
        ))
      }
    </div>

    <CreateCreditTariffModal />
  </>
);

export default TariffsGridView;
