import React, { useState, createContext, useMemo } from 'react';

import TariffsPageView from './TariffsPageView';

interface ModalContextType {
  isModalOpened: boolean;
  setIsModalOpened: (val: boolean) => void;
}

export const ModalCreateTariffContext = createContext<ModalContextType | undefined>(undefined);

const TariffsPageController: React.FC = () => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const providerValue = useMemo(() => ({
    isModalOpened,
    setIsModalOpened,
  }), [isModalOpened, setIsModalOpened]);

  return (
    <ModalCreateTariffContext.Provider value={providerValue}>
      <TariffsPageView setIsModalOpened={setIsModalOpened} />
    </ModalCreateTariffContext.Provider>
  );
};

export default TariffsPageController;
