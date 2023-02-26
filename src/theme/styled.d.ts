import 'styled-components';
import { AliasToken, ComponentTokenMap } from 'antd/lib/theme/interface';

declare module 'styled-components' {
  export interface DefaultTheme extends
    AliasToken,
    ComponentTokenMap,
    DefaultColors,
    CurrentThemeStatus,
    CustomColors,
    BoxShadows,
    Gradients,
    FontSizes { }
}

interface DefaultColors {
  'gray-1': string;
  'gray-2': string;
  'gray-3': string;
  'gray-4': string;
  'gray-5': string;
  'gray-6': string;
  'gray-7': string;
  'gray-8': string;
  'gray-9': string;
  'gray-10': string;
  'gray-11': string;
  'gray-12': string;
  'gray-13': string;
}

interface CurrentThemeStatus {
  isDarkMode: boolean;
}

interface CustomColors {
  colorPrimarySoft: string;
  colorTextLight: string;
  colorTextDark: string;
}

interface BoxShadows {
  shadowXL: string;
  shadowSM: string;
  shadowBase: string;
  shadowMd: string;
  shadowLg: string;
  shadowXl: string;
  shadow2Xl: string;
  shadowOutline: string;
  shadowInner: string;
}

interface Gradients {
  authGradientLight: string;
  authGradientDark: string;
}

interface FontSizes {
  fontSize3Xs: string;
  fontSize2Xs: string;
  fontSizeXs: string;
  fontSizeSm: string;
  fontSizeMd: string;
  fontSizeLg: string;
  fontSizeXl: string;
  fontSize2Xl: string;
  fontSize3Xl: string;
  fontSize4Xl: string;
  fontSize5Xl: string;
}
