import {
  action, computed, makeObservable, observable, runInAction, toJS,
} from 'mobx';
import { NavigateFunction } from 'react-router-dom';

import { IClient } from '../../domain/entities/users/client';
import { GetClientUseCase } from '../../domain/useCases/clients/GetClientUseCase';
import { GetBankAccountsUseCase } from '../../domain/useCases/bankAccounts/GetBankAccountsUseCase';
import { IBankAccount } from '../../domain/entities/bankAccounts/bankAccount';
import { ICreditAccount } from '../../domain/entities/credit/creditAccount';
import { GetCreditAccountsUseCase } from '../../domain/useCases/credits/GetCreditAccountsUseCase';
import { CreateBankAccountUseCase } from '../../domain/useCases/bankAccounts/CreateBankAccountUseCase';

export class ClientPageViewModel {
  @observable private _isLoading: boolean = true;

  @observable private _client: IClient | undefined = undefined;

  @observable private _bankAccounts: IBankAccount[] = [];

  @observable private _creditAccounts: ICreditAccount[] = [];

  public constructor(
    private _getClientUseCase: GetClientUseCase,
    private _getBankAccountsUseCase: GetBankAccountsUseCase,
    private _getCreditAccountsUseCase: GetCreditAccountsUseCase,
    private _createBankAccountUseCase: CreateBankAccountUseCase,
    private _navigate: NavigateFunction,
  ) {
    makeObservable(this);
  }

  @action public init(id: string) {
    this._setIsLoading(true);

    Promise.all([
      this.getClient(id),
      this.getBankAccounts(id),
      this.getCreditAccounts(id),
    ]).then(() => {
      this._setIsLoading(false);
    });
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

  @computed public get creditAccounts() {
    return toJS(this._creditAccounts);
  }

  @action private _setIsLoading(val: boolean) {
    this._isLoading = val;
  }

  @action public getClient(id: string) {
    return this._getClientUseCase.fetch({ id })
      .then((client) => {
        if (client) {
          runInAction(() => {
            this._client = client;
          });
        }
      });
  }

  @action public getBankAccounts(id: string) {
    return this._getBankAccountsUseCase.fetch({ id })
      .then((bankAccounts) => {
        if (bankAccounts) {
          runInAction(() => {
            this._bankAccounts = bankAccounts;
          });
        }
      });
  }

  @action public getCreditAccounts(id: string) {
    return this._getCreditAccountsUseCase.fetch({ id })
      .then((creditAccounts) => {
        if (creditAccounts) {
          runInAction(() => {
            this._creditAccounts = creditAccounts;
          });
        }
      });
  }

  @action public createBankAccount(ownerId: string) {
    this._setIsLoading(true);

    this._createBankAccountUseCase.fetch({ ownerId })
      .then((response) => {
        if (response) {
          runInAction(() => {
            this._navigate(`/bank-accounts/${response.id}`);
          });
        }
      })
      .finally(() => {
        this._setIsLoading(false);
      });
  }
}
