import React from 'react';
import { InputProps } from 'antd';

import { InputAnt } from './styled';

const InputStyled: React.FC<InputProps> = (props) => (
  <InputAnt {...props} size={props.size} />
);

export default InputStyled;
