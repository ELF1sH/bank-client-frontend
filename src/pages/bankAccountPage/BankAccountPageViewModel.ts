import {
  action, computed, makeObservable, observable, runInAction, toJS,
} from 'mobx';

import { IBankAccount } from '../../domain/entities/bankAccounts/bankAccount';
import { GetBankAccountUseCase } from '../../domain/useCases/bankAccounts/GetBankAccountUseCase';
import { GetOperationsHistoryUseCase } from '../../domain/useCases/bankAccounts/GetOperationsHistoryUseCase';
import { IOperation } from '../../domain/entities/bankAccounts/operation';
import { CloseBankAccountUseCase } from '../../domain/useCases/bankAccounts/CloseBankAccountUseCase';

export class BankAccountPageViewModel {
  @observable private _isLoading: boolean = true;

  @observable private _bankAccount: IBankAccount | undefined = undefined;

  @observable private _operationsHistory: IOperation[] = [];

  public constructor(
    private _getBankAccountUseCase: GetBankAccountUseCase,
    private _getOperationsHistoryUseCase: GetOperationsHistoryUseCase,
    private _closeBankAccountUseCase: CloseBankAccountUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get isLoading() {
    return toJS(this._isLoading);
  }

  @computed public get bankAccount() {
    return toJS(this._bankAccount);
  }

  @computed public get operationsHistory() {
    return toJS(this._operationsHistory);
  }

  @action private _setIsLoading(val: boolean) {
    this._isLoading = val;
  }

  @action public getBankAccount(id: string) {
    this._setIsLoading(true);

    this._getBankAccountUseCase.getBankAccount(id)
      .then((bankAccount) => {
        if (bankAccount) {
          runInAction(() => {
            this._bankAccount = bankAccount;
          });
        }
      })
      .finally(() => {
        this._setIsLoading(false);
      });
  }

  @action public getOperationsHistory(id: string) {
    this._setIsLoading(true);

    this._getOperationsHistoryUseCase.getOperationsHistory(id)
      .then((operationsHistory) => {
        if (operationsHistory) {
          runInAction(() => {
            this._operationsHistory = operationsHistory;
          });
        }
      })
      .finally(() => {
        this._setIsLoading(false);
      });
  }

  @action public closeBankAccount(id: string) {
    this._setIsLoading(true);

    this._closeBankAccountUseCase.closeBankAccount(id)
      .then((bankAccount) => {
        if (bankAccount) {
          runInAction(() => {
            this._bankAccount = bankAccount;
          });
        }
      })
      .finally(() => {
        this._setIsLoading(false);
      });
  }
}
