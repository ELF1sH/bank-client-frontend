import React from 'react';
import { theme } from 'antd';

import { FactBlockWrapper, FactsWrapper } from './styled';
import FactIcon from '../../atoms/icons/FactIcon';

interface FactBlockProps {
  facts: string[];
}

const FactBlock: React.FC<FactBlockProps> = ({
  facts,
}) => {
  const { token } = theme.useToken();

  return (
    <FactBlockWrapper>
      <FactIcon color={token.colorPrimary} />
      <FactsWrapper>
        {
          facts.map((fact, idx) => (
            <p key={idx}>{fact}</p>
          ))
        }
      </FactsWrapper>
    </FactBlockWrapper>
  );
};

export default FactBlock;
