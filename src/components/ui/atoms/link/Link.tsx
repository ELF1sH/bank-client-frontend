import React from 'react';

import { StyledLink, StyledRouterLink } from './styled';

interface LinkProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  to,
  className = '',
}) => (
  to ? (
    <StyledRouterLink to={to} className={className}>
      {children}
    </StyledRouterLink>
  ) : (
    <StyledLink href={href} className={className}>
      <div>
        {children}
      </div>
    </StyledLink>
  )
);

export default Link;
