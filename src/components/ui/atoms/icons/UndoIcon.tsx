import React from 'react';

import { IconProps } from './interfaces/iconProps';

const UndoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...restProps }) => (
  <svg {...restProps} width={size} height={size} viewBox="-3 4 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.75 13.313v2.063c0 0.438-0.344 0.625-0.688 0.375l-6.781-4.875c-0.375-0.25-0.375-0.719 0-0.969l6.781-4.906c0.344-0.25 0.688-0.094 0.688 0.344v2.031c1.531 0 4.688 0.188 6.75 1.531 4.719 3.094 7.438 13.219-8 18.344 0 0 9.313-4.656 7.688-11.063-0.406-1.719-2.313-3.25-6.438-2.875z"
      fill={color}
    />
  </svg>
);

export default UndoIcon;
