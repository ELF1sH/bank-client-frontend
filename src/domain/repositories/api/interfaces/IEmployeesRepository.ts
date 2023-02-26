import { IPaginationRequest, IPaginationResponse } from '../../../entities/common/pagination';
import { ICreateEmployeePayload, IEmployee } from '../../../entities/users/employee';

export interface IEmployeesRepository {
  getEmployees: (pagination: IPaginationRequest) => Promise<IGetEmployeesResponse>;
  getEmployee: (id: string) => Promise<IEmployee>;
  createEmployee: (payload: ICreateEmployeePayload) => Promise<IEmployee>;
}

export interface IGetEmployeesResponse extends IPaginationResponse {
  employees: IEmployee[];
}
