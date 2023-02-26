import React from 'react';

import CreateClientModalController from './CreateClientModalController';
import { CreateClientUseCase } from '../../../domain/useCases/clients/CreateClientUseCase';
import { clientsRepository } from '../../../domain/repositories/api/ClientsRepository';
import { useNotifications } from '../../../modules/notification/useNotifications';
import { CreateClientModalViewModel } from './CreateClientModalViewModel';

interface CreateClientModalProviderProps {
  isModalOpened: boolean;
  setIsModalOpened: (value: boolean) => void;
}

const CreateClientModalProvider: React.FC<CreateClientModalProviderProps> = ({
  isModalOpened,
  setIsModalOpened,
}) => {
  const { onError, onSuccess } = useNotifications();

  const createClientUseCase = new CreateClientUseCase(clientsRepository, onError, onSuccess);

  const viewModel = new CreateClientModalViewModel(createClientUseCase);

  return (
    <CreateClientModalController
      viewModel={viewModel}
      isModalOpened={isModalOpened}
      setIsModalOpened={setIsModalOpened}
    />
  );
};

export default CreateClientModalProvider;
