import React from 'react';

import LogoView from './LogoView';

interface LogoControllerProps {
  isSidebarCollapsed: boolean,
}

const LogoController: React.FC<LogoControllerProps> = ({
  isSidebarCollapsed,
}) => (
  <LogoView isSidebarCollapsed={isSidebarCollapsed} />
);

export default LogoController;
