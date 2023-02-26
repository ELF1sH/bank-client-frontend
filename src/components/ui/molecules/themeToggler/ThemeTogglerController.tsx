import React from 'react';
import { observer } from 'mobx-react-lite';

import ThemeTogglerView from './ThemeTogglerView';
import ThemeButtonView from './ThemeButtonView';
import { ThemeTogglerViewModel } from './ThemeTogglerViewModel';

interface ThemeTogglerControllerProps {
  viewModel: ThemeTogglerViewModel,
  isSwitch?: boolean;
  className?: string;
}

const ThemeTogglerController: React.FC<ThemeTogglerControllerProps> = ({
  viewModel,
  isSwitch = true,
  className,
}) => (
  isSwitch
    ? (
      <ThemeTogglerView
        isDarkMode={viewModel.isDarkMode()}
        onClickThemeToggle={() => viewModel.toggleTheme()}
        className={className}
      />
    ) : (
      <ThemeButtonView
        isDarkMode={viewModel.isDarkMode()}
        onClickThemeToggle={() => viewModel.toggleTheme()}
        className={className}
      />
    )
);

export default observer(ThemeTogglerController);
