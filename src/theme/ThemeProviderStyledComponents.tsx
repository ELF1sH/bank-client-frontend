import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as themeAnt } from 'antd';

import { getTokensForStyledComponents, GlobalStyles } from './theme';
import { useStore } from '../storesMobx/MobxStoreProvider';

interface ThemeProviderStyledComponentsProps {
  children: React.ReactNode;
}

const ThemeProviderStyledComponents: React.FC<ThemeProviderStyledComponentsProps> = ({
  children,
}) => {
  const theme = themeAnt.useToken();

  const { themeStore } = useStore();

  return (
    <ThemeProvider theme={getTokensForStyledComponents(theme.token, themeStore.isDarkMode)}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderStyledComponents;
