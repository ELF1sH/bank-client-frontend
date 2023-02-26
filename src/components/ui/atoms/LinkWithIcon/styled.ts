import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { Link } from 'react-router-dom';

export const RouterLinkStyled = styled(Link)<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colorText};
    display: flex;
    align-items:center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    transition: .2s background-color;
    &:hover {
      background-color: ${theme.colorPrimaryBgHover};
      color: ${theme.colorText};
    }
    &:active {
      background-color ${theme.colorPrimarySoft};
      color: ${theme.colorText};
    }
  `}
`;
