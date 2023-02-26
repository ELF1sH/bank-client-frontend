import React from 'react';

import EmployeePageController from './EmployeePageController';
import { useNotifications } from '../../modules/notification/useNotifications';
import { EmployeePageViewModel } from './EmployeePageViewModel';
import { BlockUserUseCase } from '../../domain/useCases/users/BlockUserUseCase';
import { usersRepository } from '../../domain/repositories/api/UsersRepository';
import { GetEmployeeUseCase } from '../../domain/useCases/employees/GetEmployeeUseCase';
import { employeesRepository } from '../../domain/repositories/api/EmployeesRepository';

const EmployeePageProvider: React.FC = () => {
  const { onError, onSuccess } = useNotifications();

  const getEmployeeUseCase = new GetEmployeeUseCase(employeesRepository, onError);

  const blockUserUseCase = new BlockUserUseCase(usersRepository, onError, onSuccess);

  const viewModel = new EmployeePageViewModel(
    getEmployeeUseCase,
    blockUserUseCase,
  );

  return (
    <EmployeePageController viewModel={viewModel} />
  );
};

export default EmployeePageProvider;
