import React from 'react';

import SwitchFancy from '../../atoms/switchFancy/SwitchFancy';
import sunIcon from '../../../../assets/switchIcons/sunIcon.png';
import moonIcon from '../../../../assets/switchIcons/moonIcon.png';

export interface ThemeTogglerViewProps {
  isDarkMode: boolean;
  onClickThemeToggle: () => void;
  className?: string;
}

const ThemeTogglerView: React.FC<ThemeTogglerViewProps> = ({
  isDarkMode,
  onClickThemeToggle,
  className,
}) => (
  <SwitchFancy
    falseLabel="light"
    trueLabel="dark"
    falseIcon={sunIcon}
    trueIcon={moonIcon}
    isChecked={isDarkMode}
    className={className}
    setIsChecked={onClickThemeToggle}
  />
);

export default ThemeTogglerView;
