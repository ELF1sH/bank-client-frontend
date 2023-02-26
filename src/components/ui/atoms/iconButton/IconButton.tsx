import React from 'react';
import { ButtonProps } from 'antd/lib/button';

import { IconButtonStyled } from './styled';

export const IconButton: React.FC<ButtonProps> = (props) => (
  <IconButtonStyled
    type="text"
    size="small"
    {...props}
  />
);
