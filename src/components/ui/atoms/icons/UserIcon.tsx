import React from 'react';

import { IconProps } from './interfaces/iconProps';

const UserIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...restProps }) => (
  <svg {...restProps} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3.75C9.10875 3.75 6.75 6.10875 6.75 9C6.75 10.8075 7.6725 12.4125 9.0705 13.3597C6.39525 14.5072 4.5 17.1622 4.5 20.25H6C6 16.9275 8.6775 14.25 12 14.25C15.3225 14.25 18 16.9275 18 20.25H19.5C19.5 17.1622 17.6047 14.508 14.9295 13.359C15.643 12.8773 16.2276 12.2281 16.6321 11.4682C17.0367 10.7083 17.2488 9.86087 17.25 9C17.25 6.10875 14.8912 3.75 12 3.75ZM12 5.25C14.0798 5.25 15.75 6.92025 15.75 9C15.75 11.0798 14.0798 12.75 12 12.75C9.92025 12.75 8.25 11.0798 8.25 9C8.25 6.92025 9.92025 5.25 12 5.25Z"
      fill={color}
    />
  </svg>
);

export default UserIcon;
