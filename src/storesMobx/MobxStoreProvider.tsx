import React, { useContext } from 'react';

import { initializeStore, RootStore } from './RootStore';

interface StoreProviderProps {
  children: React.ReactNode,
}

const StoreContext = React.createContext<RootStore | undefined>(undefined);

export const useStore: () => RootStore = () => {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider');
  }

  return context;
};

export const MobxStoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const store: RootStore = initializeStore();

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
