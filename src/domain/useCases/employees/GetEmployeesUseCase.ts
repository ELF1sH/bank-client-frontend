import { IPaginationRequest } from '../../entities/common/pagination';
import { ErrorNotificationType, ShowErrorFunction } from '../../../modules/notification/types';
import { IEmployeesRepository, IGetEmployeesResponse } from '../../repositories/api/interfaces/IEmployeesRepository';

export class GetEmployeesUseCase {
  public constructor(
    private _employeesRepository: IEmployeesRepository,
    private readonly _onError: ShowErrorFunction,
  ) { }

  public async getEmployees(
    currentPage: number,
    itemsPerPage: number,
  ): Promise<IGetEmployeesResponse | void> {
    const pagination: IPaginationRequest = {
      currentPage,
      itemsPerPage,
    };

    return this._employeesRepository
      .getEmployees(pagination)
      .catch((e) => {
        this._onError(ErrorNotificationType.FAILED_TO_FETCH_DATA);

        console.log(e);
      });
  }
}
