import {
  action, computed, makeObservable, observable, runInAction, toJS,
} from 'mobx';
import { NavigateFunction } from 'react-router-dom';

import { IClient } from '../../domain/entities/users/client';
import { GetClientUseCase } from '../../domain/useCases/clients/GetClientUseCase';
import { GetBankAccountsUseCase } from '../../domain/useCases/bankAccounts/GetBankAccountsUseCase';
import { IBankAccount } from '../../domain/entities/bankAccounts/bankAccount';
import { OpenBankAccountUseCase } from '../../domain/useCases/bankAccounts/OpenBankAccountUseCase';

export class ClientPageViewModel {
  @observable private _isLoading: boolean = true;

  @observable private _client: IClient | undefined = undefined;

  @observable private _bankAccounts: IBankAccount[] = [];

  public constructor(
    private _getClientUseCase: GetClientUseCase,
    private _getBankAccountsUseCase: GetBankAccountsUseCase,
    private _openBankAccountUseCase: OpenBankAccountUseCase,
    private _navigate: NavigateFunction,
  ) {
    makeObservable(this);
  }

  @computed public get isLoading() {
    return toJS(this._isLoading);
  }

  @computed public get client() {
    return toJS(this._client);
  }

  @computed public get bankAccounts() {
    return toJS(this._bankAccounts);
  }

  @action private _setIsLoading(val: boolean) {
    this._isLoading = val;
  }

  @action public getClient(id: string) {
    this._setIsLoading(true);

    this._getClientUseCase.fetch({ id })
      .then((client) => {
        if (client) {
          runInAction(() => {
            this._client = client;
          });
        }
      })
      .finally(() => {
        this._setIsLoading(false);
      });
  }

  @action public getBankAccounts(id: string) {
    this._setIsLoading(true);

    this._getBankAccountsUseCase.fetch({ id })
      .then((bankAccounts) => {
        if (bankAccounts) {
          runInAction(() => {
            this._bankAccounts = bankAccounts;
          });
        }
      })
      .finally(() => {
        this._setIsLoading(false);
      });
  }

  @action public openBankAccount() {
    this._setIsLoading(true);

    this._openBankAccountUseCase.fetch()
      .then((bankAccount) => {
        if (bankAccount) {
          this._navigate(`/bank-accounts/${bankAccount.id}`);
        }
      })
      .finally(() => {
        this._setIsLoading(false);
      });
  }
}
