import React from 'react';

import { IconProps } from './interfaces/iconProps';

const FileAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...restProps }) => (
  <svg {...restProps} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.5 2.25V21.75H19.5V7.1955L19.2892 6.96075L14.7892 2.46075L14.5545 2.25H4.5ZM6 3.75H13.5V8.25H18V20.25H6V3.75ZM15 4.8285L16.9222 6.75H15V4.8285ZM8.25 9.75V11.25H15.75V9.75H8.25ZM8.25 12.75V14.25H15.75V12.75H8.25ZM8.25 15.75V17.25H15.75V15.75H8.25Z"
      fill={color}
    />
  </svg>
);

export default FileAltIcon;
