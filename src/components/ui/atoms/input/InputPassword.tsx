import React from 'react';
import { InputProps } from 'antd';

import { InputPasswordAnt } from './styled';

const InputPasswordStyled: React.FC<InputProps> = (props) => (
  <InputPasswordAnt {...props} size={props.size} />
);

export default InputPasswordStyled;
