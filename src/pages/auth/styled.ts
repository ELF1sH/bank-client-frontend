import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

import Logo from '../../components/ui/atoms/icons/logo/Logo';

export const AuthPageWrapper = styled.div<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    height: 100vh;
    width: 100%;
    background: ${theme.isDarkMode ? theme.authGradientDark : theme.authGradientLight};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const AuthFormContainer = styled.div<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    width: 400px;
    padding: 40px 30px;
    background-color: ${theme.colorBgContainer};
    border-radius: ${theme.borderRadiusLG}px;
    box-shadow: ${theme.shadow2Xl};
    position: relative;
  `}
`;

export const LogoStyled = styled(Logo)`
  width: 100%;
  margin-bottom: 80px;
`;

export const SwitchesContainer = styled.div<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    position: absolute;
    top: 110%;
    left: 50%;
    transform: translateX(-50%);

    padding: 15px 15px;
    background-color: ${theme.colorBgContainer};
    border-radius: ${theme.borderRadiusLG}px;
    box-shadow: ${theme.shadow2Xl};
    
    display:flex;
    flex-direction: column;
    align-items:center;
    gap: 10px;
  `}
`;
