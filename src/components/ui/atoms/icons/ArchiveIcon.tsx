import React from 'react';

import { IconProps } from './interfaces/iconProps';

const ArchiveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...restProps }) => (
  <svg {...restProps} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 3.75V8.25H3.75V20.25H20.25V8.25H21V3.75H3ZM4.5 5.25H19.5V6.75H4.5V5.25ZM5.25 8.25H18.75V18.75H5.25V8.25ZM9.60975 9.75C9.1965 9.7875 8.89125 10.1572 8.9295 10.5705C8.96775 10.983 9.33675 11.2882 9.75 11.25H14.25C14.52 11.253 14.7712 11.112 14.9093 10.878C14.9755 10.763 15.0103 10.6327 15.0103 10.5C15.0103 10.3673 14.9755 10.237 14.9093 10.122C14.7712 9.888 14.5192 9.747 14.25 9.75H9.609H9.60975Z"
      fill={color}
    />
  </svg>
);

export default ArchiveIcon;
