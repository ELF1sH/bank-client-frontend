import { IUser } from './user';

export interface IEmployee extends IUser {
  jobPosition: JobPosition,
}

export enum JobPosition {
  Cashier = 0,
  Manager = 1,
  Director = 2,
}

export interface ICreateEmployeePayload {
  firstName: string;
  lastName: string;
  middleName: string;
  jobPosition: number;
}
