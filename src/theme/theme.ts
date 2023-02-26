import { theme } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider/context';
import {
  createGlobalStyle, css, DefaultTheme, ThemeProps,
} from 'styled-components';
import { GlobalToken } from 'antd/es/theme/interface';

import { colors } from './colors';

const { defaultAlgorithm, darkAlgorithm } = theme;

export const getThemeConfig = (isDarkMode: boolean): ThemeConfig => ({
  algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
  token: {
    fontFamily: 'Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen',
    fontSize: 16,
    colorPrimary: colors.COLOR_PRIMARY,
    colorPrimaryBgHover: isDarkMode
      ? colors.COLOR_PRIMARY_HOVER_DARK
      : colors.COLOR_PRIMARY_HOVER_LIGHT,
    colorLinkHover: isDarkMode
      ? colors.COLOR_LINK_HOVER_DARK
      : colors.COLOR_LINK_HOVER_LIGHT,
    colorBgContainer: isDarkMode
      ? colors.COLOR_BG_CONTAINER_DARK
      : colors.COLOR_BG_CONTAINER_LIGHT,
    colorText: isDarkMode
      ? colors.COLOR_TEXT_DARK
      : colors.COLOR_TEXT_LIGHT,
  },
  components: {

  },
} as ThemeConfig);

export const getTokensForStyledComponents = (
  tokens: GlobalToken,
  isDarkMode: boolean,
): DefaultTheme => ({
  ...tokens,
  ...colors.grayPalette,

  isDarkMode,

  colorPrimarySoft: isDarkMode ? colors.COLOR_PRIMARY_SOFT_DARK : colors.COLOR_PRIMARY_SOFT,
  colorTextLight: colors.COLOR_TEXT_LIGHT,
  colorTextDark: colors.COLOR_TEXT_DARK,

  shadowXL: '0 0 0 1px rgba(0, 0, 0, 0.05)',
  shadowSM: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  shadowBase: '0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  shadowMd: `0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px ${isDarkMode ? colors.grayPalette['gray-9'] : colors.grayPalette['gray-4']}`,
  shadowLg: '0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  shadowXl: '0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  shadow2Xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  shadowOutline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
  shadowInner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',

  authGradientLight: `linear-gradient(148deg, #d9d9d9 0%, ${tokens.colorPrimary} 35%, #00D4FE 100%)`,
  authGradientDark: `linear-gradient(148deg, #8c8c8c 0%, ${tokens.colorPrimary} 35%, #026574 100%)`,

  fontSize3Xs: '0.45rem',
  fontSize2Xs: '0.625rem',
  fontSizeXs: '0.75rem',
  fontSizeSm: '0.875rem',
  fontSizeMd: '1rem',
  fontSizeLg: '1.125rem',
  fontSizeXl: '1.25rem',
  fontSize2Xl: '1.5rem',
  fontSize3Xl: '1.875rem',
  fontSize4Xl: '2.25rem',
  fontSize5Xl: '3rem',
});

export const GlobalStyles = createGlobalStyle<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    body {
      background: ${theme.colorBgContainer};
      color: ${theme.colorText};

    };
    .ant-typography {
      .ant-typography-edit {
        color: ${theme.colorPrimary} !important;
        &:active {
          color: ${theme.colorPrimaryActive} !important;
        }
      }
    };
    .ant-table-row {
      cursor: pointer;
    }
    .ant-modal-header {
      && {
        margin-bottom: 20px;
      }
    }
    .ant-tag {
      && {
        height: fit-content;
      }
    }
    .ant-input-number {
      display: flex;
      align-items:center;
      .ant-input-number-input-wrap {
        flex-grow: 1;
      }
    }
  `};
`;
