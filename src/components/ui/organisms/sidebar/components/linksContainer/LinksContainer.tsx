import React from 'react';
import { useLocation } from 'react-router-dom';

import SidebarItem from './components/sidebarItem/SidebarItemController';
import InfoIcon from '../../../../atoms/icons/InfoIcon';
import { Wrapper } from './styled';
import UserIcon from '../../../../atoms/icons/UserIcon';

interface LinksContainerProps {
  isSidebarCollapsed: boolean;
}

export const LinksContainer: React.FC<LinksContainerProps> = ({ isSidebarCollapsed }) => {
  const { pathname } = useLocation();
  const curSubDirectory = `/${pathname.split('/')[1]}`;

  const subDirectories = ['/profile', '/take-loan'];

  return (
    <Wrapper>
      <SidebarItem
        text="Profile"
        to={subDirectories[0]}
        isSidebarCollapsed={isSidebarCollapsed}
        isActive={subDirectories[0] === curSubDirectory}
      >
        <UserIcon />
      </SidebarItem>

      <SidebarItem
        text="Take a loan"
        to={subDirectories[1]}
        isSidebarCollapsed={isSidebarCollapsed}
        isActive={subDirectories[1] === curSubDirectory}
      >
        <InfoIcon />
      </SidebarItem>
    </Wrapper>
  );
};
