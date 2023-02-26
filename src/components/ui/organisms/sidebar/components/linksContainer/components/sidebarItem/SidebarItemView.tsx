import React from 'react';

import {
  RouterLinkStyled, SidebarItem, SidebarLink, SidebarLinkWrapper,
} from './styled';

interface SidebarItemViewProps {
  text: string;
  to: string;
  isSidebarCollapsed: boolean;
  isActive: boolean;
  children?: React.ReactNode;
}

const SidebarItemView: React.FC<SidebarItemViewProps> = ({
  text,
  to,
  isSidebarCollapsed,
  isActive,
  children,
}) => (
  <div>
    <RouterLinkStyled to={to}>
      <SidebarItem isActive={isActive}>
        <SidebarLinkWrapper>
          { children }
          <SidebarLink $isSidebarCollapsed={isSidebarCollapsed}>
            {text}
          </SidebarLink>
        </SidebarLinkWrapper>
      </SidebarItem>
    </RouterLinkStyled>
  </div>
);

export default SidebarItemView;
