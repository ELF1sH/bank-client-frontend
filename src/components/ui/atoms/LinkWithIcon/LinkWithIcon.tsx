import React from 'react';
import { LinkProps } from 'react-router-dom';

import { RouterLinkStyled } from './styled';

interface LinkWithIconProps extends LinkProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const LinkWithIcon: React.FC<LinkWithIconProps> = ({
  to,
  icon,
  children,
}) => (
  <RouterLinkStyled to={to}>
    {icon}
    {children}
  </RouterLinkStyled>
);

export default LinkWithIcon;
