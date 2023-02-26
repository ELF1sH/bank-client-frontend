import React from 'react';

import { Loader, LoaderWrapper } from './styled';

interface SpinnerProps {
  isCentered?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({
  isCentered = false,
}) => (
  <LoaderWrapper isCentered={isCentered}>
    <Loader />
  </LoaderWrapper>
);

export default Spinner;
