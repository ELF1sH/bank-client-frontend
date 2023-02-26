import axios, { AxiosResponse } from 'axios';

import { IEmployeesRepository, IGetEmployeesResponse } from './interfaces/IEmployeesRepository';
import { IPaginationRequest } from '../../entities/common/pagination';
import { mockGettingEmployeesList, mockCreatingEmployee, mockGettingEmployee } from './mocks/employeesMock';
import { IEmployee, ICreateEmployeePayload } from '../../entities/users/employee';

mockGettingEmployeesList();
mockGettingEmployee();
mockCreatingEmployee();

class EmployeesRepository implements IEmployeesRepository {
  getEmployees(pagination: IPaginationRequest) {
    return axios
      .get(`/employees?currentPage=${pagination.currentPage}&itemsPerPage=${pagination.itemsPerPage}`)
      .then((response: AxiosResponse<IGetEmployeesResponse>) => response.data);
  }

  getEmployee(id: string) {
    return axios
      .get(`/employee?id=${id}`)
      .then((response: AxiosResponse<IEmployee>) => response.data);
  }

  createEmployee(payload: ICreateEmployeePayload) {
    return axios
      .post('/create-employee', payload)
      .then((response: AxiosResponse<IEmployee>) => response.data);
  }
}

export const employeesRepository = new EmployeesRepository();
