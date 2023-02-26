import { ThemeStore } from '../../../storesMobx/stores/ThemeStore';

export class GetThemeUseCase {
  public constructor(
    private _themeStore: ThemeStore,
  ) { }

  public isDarkMode(): boolean {
    return this._themeStore.isDarkMode;
  }
}
