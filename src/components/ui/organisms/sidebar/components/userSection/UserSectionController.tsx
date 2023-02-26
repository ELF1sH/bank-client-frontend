import React from 'react';

import UserSectionView from './UserSectionView';

interface UserSectionControllerProps {
  isSidebarCollapsed: boolean,
}

const UserSectionController: React.FC<UserSectionControllerProps> = ({ isSidebarCollapsed }) => (
  <UserSectionView
    isSidebarCollapsed={isSidebarCollapsed}
  />
);

export default UserSectionController;
