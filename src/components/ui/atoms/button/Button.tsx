import React from 'react';
import { ButtonProps } from 'antd';

import { ButtonAnt } from './styled';

const ButtonStyled: React.FC<ButtonProps> = (props) => (
  <ButtonAnt {...props} size={props.size} />
);

export default ButtonStyled;
