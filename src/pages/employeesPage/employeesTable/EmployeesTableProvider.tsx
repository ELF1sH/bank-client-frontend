import React, { memo } from 'react';

import EmployeesTableController from './EmployeesTableController';
import { EmployeesTableViewModel } from './EmployeesTableViewModel';
import { useNotifications } from '../../../modules/notification/useNotifications';
import { GetEmployeesUseCase } from '../../../domain/useCases/employees/GetEmployeesUseCase';
import { employeesRepository } from '../../../domain/repositories/api/EmployeesRepository';

const EmployeesTableProvider: React.FC = () => {
  const { onError } = useNotifications();

  const getEmployeesUseCase = new GetEmployeesUseCase(employeesRepository, onError);

  const viewModel = new EmployeesTableViewModel(getEmployeesUseCase);

  return (
    <EmployeesTableController viewModel={viewModel} />
  );
};

export default memo(EmployeesTableProvider);
