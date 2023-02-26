import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import SidebarView from './SidebarView';
import { sleep } from '../../../../utils/asyncHelpers';

export const WIDTH_SIDEBAR = 240;
export const WIDTH_SIDEBAR_COLLAPSED = 56;

const SidebarController: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  const [sidebarWidth, setSidebarWidth] = useState<number>(WIDTH_SIDEBAR);

  const onClickBtnSidebarCollapse = async () => {
    if (!isSidebarCollapsed) {
      setIsSidebarCollapsed(true);

      await sleep(200);

      setSidebarWidth(WIDTH_SIDEBAR_COLLAPSED);
    } else {
      setSidebarWidth(WIDTH_SIDEBAR);

      await sleep(200);

      setIsSidebarCollapsed(false);
    }
  };

  return (
    <SidebarView
      isSidebarCollapsed={isSidebarCollapsed}
      sidebarWidth={sidebarWidth}
      onClickBtnSidebarCollapse={onClickBtnSidebarCollapse}
    />
  );
};

export default observer(SidebarController);
