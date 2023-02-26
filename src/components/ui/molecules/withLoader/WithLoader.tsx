import React from 'react';

import Spinner from '../../atoms/spinner/Spinner';

interface ComponentWithLoaderProps {
  isLoading: boolean;
}

const WithLoader = <T, >(Component: React.FC<any>, isLoaderCentered: boolean = false) => {
  const ComponentWithLoader: React.FC<ComponentWithLoaderProps & T> = ({
    isLoading,
    ...props
  }) => (isLoading
    ? <Spinner isCentered={isLoaderCentered} />
    : <Component {...props} />);

  return ComponentWithLoader;
};

export default WithLoader;
