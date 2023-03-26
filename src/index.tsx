import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import 'antd/dist/reset.css';
import ThemeProviderAnt from './theme/ThemeProviderAnt';
import ThemeProviderStyledComponents from './theme/ThemeProviderStyledComponents';
import { MobxStoreProvider } from './storesMobx/MobxStoreProvider';
import NotificationsProvider from './modules/notification/NotificationsProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <MobxStoreProvider>
    <ThemeProviderAnt>
      <ThemeProviderStyledComponents>
        <NotificationsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </NotificationsProvider>
      </ThemeProviderStyledComponents>
    </ThemeProviderAnt>
  </MobxStoreProvider>,
);
