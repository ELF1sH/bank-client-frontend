import { ThemeStore } from '../../../storesMobx/stores/ThemeStore';
import { IThemeRepository } from '../../repositories/other/interfaces/IThemeRepository';

export class ToggleThemeUseCase {
  public constructor(
    private _themeStore: ThemeStore,
    private _themeRepository: IThemeRepository,
  ) { }

  public toggleTheme() {
    this._themeStore.toggleTheme();

    this._themeRepository.toggleTheme();
  }
}
