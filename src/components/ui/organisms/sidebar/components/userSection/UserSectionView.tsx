import React from 'react';

import {
  UserAvatar, UserLink, UserLinksWrapper, UsernameLink, UserSection, UserSectionTextWrapper,
} from './styled';

import avatar from 'assets/avatar.png';

interface UserSectionViewProps {
  isSidebarCollapsed: boolean,
}

const UserSectionView: React.FC<UserSectionViewProps> = ({ isSidebarCollapsed }) => (
  <UserSection isSidebarCollapsed={isSidebarCollapsed}>
    <UserAvatar alt="User avatar" src={avatar} />

    {!isSidebarCollapsed && (
      <UserSectionTextWrapper>
        <UsernameLink>Иван Иванов</UsernameLink>
        <UserLinksWrapper>
          <UserLink>Settings</UserLink>
          <UserLink>Log out</UserLink>
        </UserLinksWrapper>
      </UserSectionTextWrapper>
    )}
  </UserSection>
);

export default UserSectionView;
