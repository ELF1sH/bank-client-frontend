import React from 'react';

import SidebarItemView from './SidebarItemView';

interface SidebarItemControllerProps {
  text: string,
  to: string;
  isSidebarCollapsed: boolean,
  isActive?: boolean,
  children?: React.ReactNode,
}

const SidebarItemController: React.FC<SidebarItemControllerProps> = ({
  text,
  to,
  isSidebarCollapsed,
  isActive = false,
  children,
}) => (
  <SidebarItemView
    text={text}
    to={to}
    isSidebarCollapsed={isSidebarCollapsed}
    isActive={isActive}
  >
    {children}
  </SidebarItemView>
);

export default SidebarItemController;
