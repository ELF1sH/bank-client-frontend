import { IEmployee } from '../../../../entities/users/employee';

export const getEmployeeResponse: IEmployee = {
  id: '1',
  firstName: 'First name 1',
  lastName: 'Last name 1',
  middleName: 'Middle name 1',
  isBlocked: false,
  jobPosition: 1,
};

export const getEmployeeResponseBlocked: IEmployee = {
  id: '1',
  firstName: 'First name 1',
  lastName: 'Last name 1',
  middleName: 'Middle name 1',
  isBlocked: true,
  jobPosition: 1,
};
