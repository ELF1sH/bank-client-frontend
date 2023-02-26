import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

import ChevronUpIcon from '../../../../../../atoms/icons/ChevronUpIcon';

interface SidebarItemProps {
  isActive: boolean;
}

export const RouterLinkStyled = styled(Link)<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colorText};
  `};
`;

export const SidebarItem = styled.div<SidebarItemProps & ThemeProps<DefaultTheme>>`
  ${(props) => css`
    transition: .2s background;
    position: relative;
    cursor: pointer;
    padding: 15px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      background-color: ${props.theme.colorPrimaryBgHover};
      &::after {
        opacity: 1;
      }
    }
    &::after {
      content: "";

      display:block;
      width: 3px;
      height: 100%;
      background-color: ${props.theme.colorPrimary};

      position: absolute;
      top: 0;
      right: 0;
      
      opacity: ${props.isActive ? '1' : '0'};

      transition: .1s opacity;
    }
  `}
`;

export const SidebarLinkWrapper = styled.div`
  display: flex;
  gap: 10px;
  font-weight: 500;
  align-items: center;
`;

interface SidebarLinkProps {
  $isSidebarCollapsed: boolean;
}

export const SidebarLink = styled(Typography)<SidebarLinkProps & ThemeProps<DefaultTheme>>`
  ${({ $isSidebarCollapsed, theme }) => css`
    display: ${$isSidebarCollapsed ? 'none' : 'block'};
    font-size: ${theme.fontSizeMd};
    line-height: ${theme.fontSizeMd};
  `}
`;

interface ChevronUpIconStyledProps {
  $isVisible: boolean;
}

export const ChevronUpIconStyled = styled(ChevronUpIcon)<ChevronUpIconStyledProps>`
  ${({ $isVisible }) => css`
    transform: rotate(${+!$isVisible * 180}deg);
    transition: .2s transform;
    z-index: 100;
  `}
`;

export const TreeWrapper = styled.div`
  padding-top: 10px;
`;
