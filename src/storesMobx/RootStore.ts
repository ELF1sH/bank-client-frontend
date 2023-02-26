import { themeStore, ThemeStore } from './stores/ThemeStore';

export interface RootStore {
  themeStore: ThemeStore,
}

export const initializeStore = (): RootStore => ({
  themeStore,
});
