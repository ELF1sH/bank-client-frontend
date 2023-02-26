import React from 'react';

import { IconProps } from './interfaces/iconProps';

const ChevronUpIcon: React.FC<IconProps> = ({ size = 12, color = 'currentColor', ...restProps }) => (
  <svg {...restProps} width={size} height={size / 1.5} viewBox={`0 0 ${size} ${size / 1.5}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.41 7.41L6 2.83L10.59 7.41L12 6L6 3.8147e-06L0 6L1.41 7.41Z"
      fill={color}
    />
  </svg>
);

export default ChevronUpIcon;
