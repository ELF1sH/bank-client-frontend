import React from 'react';

import Logo from './components/logo/LogoController';
import UserSection from './components/userSection/UserSectionController';
import {
  CollapseButton, CollapseButtonIcon, ScrollbarsStyled, SwitchesContainer, Wrapper,
} from './styled';
import { LinksContainer } from './components/linksContainer/LinksContainer';
import ThemeTogglerController from '../../molecules/themeToggler/ThemeTogglerProvider';
import { WIDTH_SIDEBAR_COLLAPSED } from './SidebarController';

interface SidebarViewProps {
  isSidebarCollapsed: boolean,
  sidebarWidth: number,
  onClickBtnSidebarCollapse: () => void,
}

const SidebarView: React.FC<SidebarViewProps> = ({
  isSidebarCollapsed,
  sidebarWidth,
  onClickBtnSidebarCollapse,
}) => (
  <ScrollbarsStyled
    width={sidebarWidth}
    renderTrackVertical={(props) => <div {...props} style={{ display: 'none' }} />}
    renderTrackHorizontal={(props) => <div {...props} style={{ display: 'none' }} />}
  >
    <Wrapper>
      <Logo isSidebarCollapsed={isSidebarCollapsed} />

      <CollapseButton
        size="middle"
        icon={<CollapseButtonIcon $rotateDeg={+isSidebarCollapsed * 180} />}
        onClick={() => onClickBtnSidebarCollapse()}
      />

      <LinksContainer isSidebarCollapsed={isSidebarCollapsed} />

      <SwitchesContainer>
        <ThemeTogglerController isSwitch={sidebarWidth !== WIDTH_SIDEBAR_COLLAPSED} />
      </SwitchesContainer>

      <UserSection isSidebarCollapsed={isSidebarCollapsed} />
    </Wrapper>
  </ScrollbarsStyled>
);

export default SidebarView;
