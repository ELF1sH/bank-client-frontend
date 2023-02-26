import { mock } from './common';
import { getEmployeeResponse } from './data/getEmployeeResponse';
import { getEmployeesResponse } from './data/getEmployeesResponse';

export const mockGettingEmployee = () => {
  mock
    .onGet(/\/employee\?id=*/)
    .reply(() => [200, getEmployeeResponse]);
};

export const mockGettingEmployeesList = () => {
  mock
    .onGet(/\/employees\?currentPage*/)
    .reply(() => [200, getEmployeesResponse]);
};

export const mockCreatingEmployee = () => {
  mock
    .onPost('/create-employee')
    .reply(() => [200, getEmployeeResponse]);
};
