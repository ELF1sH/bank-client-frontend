import React from 'react';
import { ConfigProvider } from 'antd';
import { observer } from 'mobx-react-lite';

import { getThemeConfig } from './theme';
import { useStore } from '../storesMobx/MobxStoreProvider';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProviderAnt: React.FC<ThemeProviderProps> = ({ children }) => {
  const { themeStore } = useStore();

  return (
    <ConfigProvider theme={getThemeConfig(themeStore.isDarkMode)}>
      { children }
    </ConfigProvider>
  );
};

export default observer(ThemeProviderAnt);
