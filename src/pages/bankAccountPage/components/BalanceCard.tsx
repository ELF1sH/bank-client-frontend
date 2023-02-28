import React from 'react';
import { Card } from 'antd';

import InputNumber from '../../../components/ui/atoms/input/InputNumber';
import Button from '../../../components/ui/atoms/button/Button';
import PlusIcon from '../../../components/ui/atoms/icons/PlusIcon';
import MinusIcon from '../../../components/ui/atoms/icons/MinusIcon';

interface BalanceCardProps {
  refillSum: number;
  updateRefillSum: (value: number) => void;
  withdraw: () => void;
  withdrawSum: number;
  updateWithdrawSum: (value: number) => void;
  refill: () => void;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  refillSum,
  updateRefillSum,
  withdraw,
  withdrawSum,
  updateWithdrawSum,
  refill,
}) => (
  <Card style={{ width: '500px', margin: '20px 0' }}>
    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
      <InputNumber
        decimalSeparator="."
        style={{ flexGrow: 1 }}
        precision={2}
        value={refillSum}
        onChange={(value) => updateRefillSum(Number(value))}
      />
      <Button
        style={{ width: '140px' }}
        icon={<PlusIcon />}
        onClick={withdraw}
      >
        Refill
      </Button>
    </div>
    <div style={{ display: 'flex', gap: '10px' }}>
      <InputNumber
        decimalSeparator="."
        style={{ flexGrow: 1 }}
        precision={2}
        value={withdrawSum}
        onChange={(value) => updateWithdrawSum(Number(value))}
      />
      <Button
        style={{ width: '140px' }}
        icon={<MinusIcon />}
        onClick={refill}
      >
        Withdraw
      </Button>
    </div>
  </Card>
);

export default BalanceCard;
