import { Button } from 'antd';
import styled, { css } from 'styled-components';
import { SizeType } from 'antd/es/config-provider/SizeContext';

interface ButtonAntProps {
  size: SizeType
}

export const ButtonAnt = styled(Button)<ButtonAntProps>`
  ${({ size = 'middle' }) => css`
    && {
      height: auto;
      padding: ${size === 'small' ? '6px' : size === 'middle' ? '10px 12px' : '12px'};
      font-size: ${size === 'small' && '14px'};
      font-weight: 700;
      width: fit-content;
      
      display:flex;
      justify-content: center;
      align-items: center;
      
      >svg {
        margin-right: 6px;
      }
    }
  `}
`;
