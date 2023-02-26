import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

import Link from '../../../../atoms/link/Link';

interface UserSectionProps {
  isSidebarCollapsed: boolean;
}

export const UserSection = styled.div<UserSectionProps>`
  ${({ isSidebarCollapsed }) => css`
    display: flex;
    gap: 16px;
    transition: .2s padding;
    padding: ${!isSidebarCollapsed ? '16px 0 24px 16px' : '16px 0 24px 4px'};
  `}
`;

export const UserAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const UserSectionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  gap: 4px;
  height: 100%;
`;

export const UserLinksWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const UsernameLink = styled(Link)<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: ${theme.fontSizeMd};
  `};
`;

export const UserLink = styled(Link)<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizeSm};
  `};
`;
