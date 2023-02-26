import React, { useState } from 'react';

import ClientsPageView from './ClientsPageView';

const ClientsPageController: React.FC = () => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  return (
    <ClientsPageView
      isModalOpened={isModalOpened}
      setIsModalOpened={setIsModalOpened}
    />
  );
};

export default ClientsPageController;
