import {
  action, computed, makeObservable, observable,
} from 'mobx';

import { IThemeRepository } from '../../domain/repositories/other/interfaces/IThemeRepository';
import { themeRepository } from '../../domain/repositories/other/ThemeRepository';

export class ThemeStore {
  @observable private _isDarkMode: boolean = false;

  public constructor(themeRepository: IThemeRepository) {
    makeObservable(this);

    this._isDarkMode = themeRepository.isDarkMode() ?? false;
  }

  @action public toggleTheme() {
    this._isDarkMode = !this._isDarkMode;
  }

  @computed public get isDarkMode(): boolean {
    return this._isDarkMode;
  }
}

export const themeStore = new ThemeStore(themeRepository);
