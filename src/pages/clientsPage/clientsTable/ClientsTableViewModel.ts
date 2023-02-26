import {
  action, computed, makeObservable, observable, runInAction, toJS,
} from 'mobx';
import { TablePaginationConfig } from 'antd';

import { IClient } from '../../../domain/entities/users/client';
import { GetClientsUseCase } from '../../../domain/useCases/clients/GetClientsUseCase';

export class ClientsTableViewModel {
  @observable private _clients: IClient[] = [];

  @observable private _pagination: TablePaginationConfig = {
    current: 1,
    pageSize: 10,
    total: 0,
  };

  @observable private _isLoading: boolean = false;

  constructor(
    private _getClientsUseCase: GetClientsUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get clients(): IClient[] {
    return toJS(this._clients);
  }

  @computed public get pagination(): TablePaginationConfig {
    return toJS(this._pagination);
  }

  @computed public get isLoading(): boolean {
    return this._isLoading;
  }

  @action public async getClients(): Promise<void> {
    runInAction(() => {
      this._isLoading = true;
    });

    const clientsResponse = await this._getClientsUseCase.getClients(
      this._pagination.current!,
      this._pagination.pageSize!,
    );

    runInAction(() => {
      this._clients = clientsResponse?.clients ?? [];

      this._pagination = {
        current: clientsResponse?.currentPage,
        pageSize: clientsResponse?.itemsPerPage,
        total: clientsResponse?.totalItems,
      };
    });

    runInAction(() => {
      this._isLoading = false;
    });
  }

  @action public async onChangePagination(pagination: TablePaginationConfig) {
    this._pagination = pagination;

    await this.getClients();
  }
}
