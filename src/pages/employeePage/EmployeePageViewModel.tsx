import {
  action, computed, makeObservable, observable, runInAction, toJS,
} from 'mobx';

import { BlockUserUseCase } from '../../domain/useCases/users/BlockUserUseCase';
import { IEmployee } from '../../domain/entities/users/employee';
import { GetEmployeeUseCase } from '../../domain/useCases/employees/GetEmployeeUseCase';

export class EmployeePageViewModel {
  @observable private _isLoading: boolean = true;

  @observable private _employee: IEmployee | undefined = undefined;

  public constructor(
    private _getEmployeeUseCase: GetEmployeeUseCase,
    private _blockUserUseCase: BlockUserUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get isLoading() {
    return toJS(this._isLoading);
  }

  @computed public get employee() {
    return toJS(this._employee);
  }

  @action private _setIsLoading(val: boolean) {
    this._isLoading = val;
  }

  @action public getEmployee(id: string) {
    this._setIsLoading(true);

    this._getEmployeeUseCase.getEmployee(id)
      .then((employee) => {
        if (employee) {
          runInAction(() => {
            this._employee = employee;
          });
        }
      })
      .finally(() => {
        this._setIsLoading(false);
      });
  }

  @action public blockUser(id: string) {
    this._blockUserUseCase.blockUser(id)
      .then((data) => {
        if (data) {
          runInAction(() => {
            this._employee = data as IEmployee;
          });
        }
      });
  }
}
