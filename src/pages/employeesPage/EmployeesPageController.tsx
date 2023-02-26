import React, { useState } from 'react';

import EmployeesPageView from './EmployeesPageView';

const EmployeesPageController: React.FC = () => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  return (
    <EmployeesPageView
      isModalOpened={isModalOpened}
      setIsModalOpened={setIsModalOpened}
    />
  );
};

export default EmployeesPageController;
