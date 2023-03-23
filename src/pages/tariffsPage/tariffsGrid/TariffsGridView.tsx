import React from 'react';
import { Card, Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';

import { ICreditTariff } from '../../../domain/entities/credit/creditTariff';

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
              {tariff.percent}
              %
            </Paragraph>
          </Card>
        ))
      }
    </div>
  </>
);

export default TariffsGridView;
