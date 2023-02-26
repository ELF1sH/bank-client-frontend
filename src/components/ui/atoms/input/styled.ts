import styled, { css } from 'styled-components';
import {
  Input, Select,
} from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';

interface InputAntProps {
  size: SizeType
}

const getCommonCssProperties = (size: SizeType) => css`
  font-size: ${size === 'small' && '14px'};
  box-shadow: none;
  &:focus {
    box-shadow: none;
  }
`;

const getInputCssProperties = (size: SizeType) => css`
  padding: ${size === 'small' ? '6px' : size === 'middle' ? '10px 12px' : '14px'};
  ${getCommonCssProperties(size)}
`;

const getSelectCssProperties = (size: SizeType) => css`
  && {
    .ant-select-selector {
      min-height: ${size === 'middle' ? '46px' : size === 'small' ? '35px' : '56px'};
      >span {
        line-height: ${size === 'middle' ? '46px' : size === 'small' ? '35px' : '56px'};
      }
    }
  }
`;

export const InputAnt = styled(Input)<InputAntProps>`
  ${({ size = 'middle' }) => getInputCssProperties(size)}
`;

export const InputPasswordAnt = styled(Input.Password)<InputAntProps>`
  ${({ size = 'middle' }) => getInputCssProperties(size)}
`;

export const SelectAnt = styled(Select)<InputAntProps>`
  ${({ size = 'middle' }) => getSelectCssProperties(size)}
`;
