import React from 'react';
import { InputNumberProps } from 'antd';

import { InputNumberStyled } from './styled';

const InputNumber: React.FC<InputNumberProps> = (props) => (
  <InputNumberStyled {...props} size={props.size} />
);

export default InputNumber;
