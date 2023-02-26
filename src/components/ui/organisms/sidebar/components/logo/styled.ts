import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

import LogoBank from '../../../../atoms/icons/logo/LogoBank';
import LogoText from '../../../../atoms/icons/logo/LogoText';

export const LogoWrapper = styled.div<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    position: relative;
    min-height: 130px;
    color: ${theme.colorText};
  `}
`;

interface LogoHedgehogStyledProps {
  $isSidebarCollapsed: boolean;
}

export const LogoBankStyled = styled(LogoBank)<LogoHedgehogStyledProps>`
  ${({ $isSidebarCollapsed }) => css`
    position: absolute;
    transition: .2s top, .2s left, .2s transform;
    top: ${!$isSidebarCollapsed ? '-20px' : '0px'};
    left: 50%;
    transform: ${!$isSidebarCollapsed ? 'translateX(-50%) scale(0.67)' : 'translateX(-50%) scale(0.25)'};
  `}
`;

export const LogoTextStyled = styled(LogoText)`
  position: absolute;
  top: 23px;
  left: calc(50% - 2px);
  transform: translateX(-50%);
`;
