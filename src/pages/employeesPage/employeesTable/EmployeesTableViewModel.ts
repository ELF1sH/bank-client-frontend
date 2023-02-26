import {
  action, computed, makeObservable, observable, runInAction, toJS,
} from 'mobx';
import { TablePaginationConfig } from 'antd';

import { GetEmployeesUseCase } from '../../../domain/useCases/employees/GetEmployeesUseCase';
import { IEmployee } from '../../../domain/entities/users/employee';

export class EmployeesTableViewModel {
  @observable private _employees: IEmployee[] = [];

  @observable private _pagination: TablePaginationConfig = {
    current: 1,
    pageSize: 10,
    total: 0,
  };

  @observable private _isLoading: boolean = false;

  constructor(
    private _getEmployeesUseCase: GetEmployeesUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get employees(): IEmployee[] {
    return toJS(this._employees);
  }

  @computed public get pagination(): TablePaginationConfig {
    return toJS(this._pagination);
  }

  @computed public get isLoading(): boolean {
    return this._isLoading;
  }

  @action public async getEmployees(): Promise<void> {
    runInAction(() => {
      this._isLoading = true;
    });

    const employeesResponse = await this._getEmployeesUseCase.getEmployees(
      this._pagination.current!,
      this._pagination.pageSize!,
    );

    runInAction(() => {
      this._employees = employeesResponse?.employees ?? [];

      this._pagination = {
        current: employeesResponse?.currentPage,
        pageSize: employeesResponse?.itemsPerPage,
        total: employeesResponse?.totalItems,
      };
    });

    runInAction(() => {
      this._isLoading = false;
    });
  }

  @action public async onChangePagination(pagination: TablePaginationConfig) {
    this._pagination = pagination;

    await this.getEmployees();
  }
}
