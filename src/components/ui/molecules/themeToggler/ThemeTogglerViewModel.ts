import { ToggleThemeUseCase } from '../../../../domain/useCases/theme/ToggleThemeUseCase';
import { GetThemeUseCase } from '../../../../domain/useCases/theme/GetThemeUseCase';

export class ThemeTogglerViewModel {
  constructor(
    private _toggleThemeUseCase: ToggleThemeUseCase,
    private _getThemeUseCase: GetThemeUseCase,
  ) { }

  public toggleTheme() {
    this._toggleThemeUseCase.toggleTheme();
  }

  public isDarkMode(): boolean {
    return this._getThemeUseCase.isDarkMode();
  }
}
