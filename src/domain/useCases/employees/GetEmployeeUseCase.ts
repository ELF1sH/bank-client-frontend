import { ErrorNotificationType, ShowErrorFunction } from '../../../modules/notification/types';
import { IEmployeesRepository } from '../../repositories/api/interfaces/IEmployeesRepository';
import { IEmployee } from '../../entities/users/employee';

export class GetEmployeeUseCase {
  public constructor(
    private _employeesRepository: IEmployeesRepository,
    private readonly _onError: ShowErrorFunction,
  ) { }

  public async getEmployee(id: string): Promise<IEmployee | void> {
    return this._employeesRepository.getEmployee(id)
      .catch((e) => {
        this._onError(ErrorNotificationType.FAILED_TO_FETCH_DATA);

        console.log(e);
      });
  }
}
