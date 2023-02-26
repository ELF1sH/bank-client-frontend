import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { IEmployeesRepository } from '../../repositories/api/interfaces/IEmployeesRepository';
import { ICreateEmployeePayload, IEmployee } from '../../entities/users/employee';

export class CreateEmployeeUseCase {
  public constructor(
    private _employeesRepository: IEmployeesRepository,
    private readonly _onError: ShowErrorFunction,
    private readonly _onSuccess: ShowSuccessNotificationFunction,
  ) { }

  public async createEmployee(payload: ICreateEmployeePayload): Promise<IEmployee | void> {
    return this._employeesRepository.createEmployee(payload)
      .then((value) => {
        this._onSuccess(SuccessNotificationType.SUCCESSFULLY_CREATED);
        return value;
      })
      .catch(() => {
        this._onError(ErrorNotificationType.FAILED_TO_SEND_DATA);
      });
  }
}
