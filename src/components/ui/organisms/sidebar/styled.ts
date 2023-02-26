import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import Scrollbars from 'react-custom-scrollbars-2';

import ChevronLeftSidebarIcon from '../../atoms/icons/ChevronLeftSidebarIcon';
import { IconButton } from '../../atoms/iconButton/IconButton';

interface ScrollbarsStyledProps {
  width: number;
}

export const ScrollbarsStyled = styled(Scrollbars)<ScrollbarsStyledProps & ThemeProps<DefaultTheme>>`
  ${({ width, theme }) => css`
    transition: .2s max-width;
    max-width: ${width}px;
    min-height: 100vh;
    box-shadow: ${theme.shadowMd};
    position: sticky !important;
    top: 0;
    flex-shrink: 0;
  `}
`;

export const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

export const CollapseButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 13px;
`;

interface CollapseButtonIconProps {
  $rotateDeg: number;
}

export const CollapseButtonIcon = styled(ChevronLeftSidebarIcon)<CollapseButtonIconProps>`
  ${({ $rotateDeg }) => css`
    transition: .2s transform;
    transform: rotate(${$rotateDeg}deg);
  `}
`;

export const SwitchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
