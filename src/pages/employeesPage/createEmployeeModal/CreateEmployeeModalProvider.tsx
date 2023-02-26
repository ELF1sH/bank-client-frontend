import React from 'react';

import CreateEmployeeModalController from './CreateEmployeeModalController';
import { useNotifications } from '../../../modules/notification/useNotifications';
import { CreateEmployeeModalViewModel } from './CreateEmployeeModalViewModel';
import { CreateEmployeeUseCase } from '../../../domain/useCases/employees/CreateEmployeeUseCase';
import { employeesRepository } from '../../../domain/repositories/api/EmployeesRepository';

interface CreateEmployeeModalProviderProps {
  isModalOpened: boolean;
  setIsModalOpened: (value: boolean) => void;
}

const CreateEmployeeModalProvider: React.FC<CreateEmployeeModalProviderProps> = ({
  isModalOpened,
  setIsModalOpened,
}) => {
  const { onError, onSuccess } = useNotifications();

  const createEmployeeUseCase = new CreateEmployeeUseCase(employeesRepository, onError, onSuccess);

  const viewModel = new CreateEmployeeModalViewModel(createEmployeeUseCase);

  return (
    <CreateEmployeeModalController
      viewModel={viewModel}
      isModalOpened={isModalOpened}
      setIsModalOpened={setIsModalOpened}
    />
  );
};

export default CreateEmployeeModalProvider;
