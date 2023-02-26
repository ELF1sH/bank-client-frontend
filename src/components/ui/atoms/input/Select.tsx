import React from 'react';
import { SelectProps } from 'antd';

import { SelectAnt } from './styled';

const SelectStyled: React.FC<SelectProps> = (props) => (
  // @ts-ignore
  <SelectAnt {...props} size={props.size} />
);

export default SelectStyled;
