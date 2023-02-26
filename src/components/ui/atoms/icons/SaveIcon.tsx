import React from 'react';

import { IconProps } from './interfaces/iconProps';

const SaveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...restProps }) => (
  <svg {...restProps} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.5 3H5.5C4.39 3 3.5 3.9 3.5 5V19C3.5 20.1 4.39 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V7L17.5 3ZM12.5 19C10.84 19 9.5 17.66 9.5 16C9.5 14.34 10.84 13 12.5 13C14.16 13 15.5 14.34 15.5 16C15.5 17.66 14.16 19 12.5 19ZM15.5 9H5.5V5H15.5V9Z"
      fill={color}
    />
  </svg>
);

export default SaveIcon;
