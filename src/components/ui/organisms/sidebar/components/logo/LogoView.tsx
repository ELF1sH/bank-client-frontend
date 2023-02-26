import React from 'react';
import { Link } from 'react-router-dom';

import Fade from '../../../../../animations/fade/Fade';
import {
  LogoBankStyled, LogoTextStyled, LogoWrapper,
} from './styled';

interface LogoViewProps {
  isSidebarCollapsed: boolean;
}

const LogoView: React.FC<LogoViewProps> = ({
  isSidebarCollapsed,
}) => (
  <Link to="/clients">
    <LogoWrapper>
      <LogoBankStyled $isSidebarCollapsed={isSidebarCollapsed} />

      {/* <Fade isVisible={!isSidebarCollapsed}> */}
      {/*  <LogoTextStyled /> */}
      {/* </Fade> */}
    </LogoWrapper>
  </Link>
);

export default LogoView;
