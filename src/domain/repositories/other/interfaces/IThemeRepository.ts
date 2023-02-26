export interface IThemeRepository {
  isDarkMode: () => boolean;

  toggleTheme: () => void;
}
