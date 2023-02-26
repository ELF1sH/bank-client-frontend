import React from 'react';

import { Grid } from './styled';

interface GridLayoutProps {
  children?: React.ReactNode;
}

const Component: React.FC<GridLayoutProps> = ({
  children,
}) => (
  <Grid>
    {children}
  </Grid>
);

export default Component;
