import {
  action, computed, makeObservable, observable, runInAction, toJS,
} from 'mobx';

import { IBankAccount } from '../../domain/entities/bankAccounts/bankAccount';
import { GetOperationsHistoryUseCase } from '../../domain/useCases/bankAccounts/GetOperationsHistoryUseCase';
import { IOperation } from '../../domain/entities/bankAccounts/operation';
import { CloseBankAccountUseCase } from '../../domain/useCases/bankAccounts/CloseBankAccountUseCase';
import { WithdrawMoneyUseCase } from '../../domain/useCases/bankAccounts/WithdrawMoneyUseCase';
import { RefillMoneyUseCase } from '../../domain/useCases/bankAccounts/RefillMoneyUseCase';
import { IOperationPayload } from '../../domain/repositories/api/interfaces/IBankAccountRepository';
import { GetBankAccountUseCase } from '../../domain/useCases/bankAccounts/GetBankAccountUseCase';
import { SendMoneyUseCase } from '../../domain/useCases/bankAccounts/SendMoneyUseCase';

export class BankAccountPageViewModel {
  @observable private _isLoading: boolean = true;

  @observable private _bankAccount: IBankAccount | undefined = undefined;

  @observable private _operationsHistory: IOperation[] = [];

  @observable private _refillSum: number = 0;

  @observable private _withdrawSum: number = 0;

  public constructor(
    private _getBankAccountDetailsUseCase: GetBankAccountUseCase,
    private _getOperationsHistoryUseCase: GetOperationsHistoryUseCase,
    private _closeBankAccountUseCase: CloseBankAccountUseCase,
    private _withdrawMoneyUseCase: WithdrawMoneyUseCase,
    private _refillMoneyUseCase: RefillMoneyUseCase,
    private _sendMoneyUseCase: SendMoneyUseCase,
  ) {
    makeObservable(this);
  }

  @action public init(id: string) {
    this._setIsLoading(true);

    Promise.all([
      this.getBankAccount(id),
    ]).then(() => {
      this._setIsLoading(false);
    });
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

  @computed public get refillSum() {
    return toJS(this._refillSum);
  }

  @computed public get withdrawSum() {
    return toJS(this._withdrawSum);
  }

  @action private _setIsLoading(val: boolean) {
    this._isLoading = val;
  }

  @action public updateRefillSum = (val: number) => {
    this._refillSum = val;
  };

  @action public updateWithdrawSum = (val: number) => {
    this._withdrawSum = val;
  };

  @action public getBankAccount(id: string) {
    return this._getBankAccountDetailsUseCase.fetch({ id })
      .then((bankAccount) => {
        if (bankAccount) {
          runInAction(() => {
            this._bankAccount = bankAccount;
          });
        }
      });
  }

  @action public closeBankAccount() {
    this._setIsLoading(true);

    this._closeBankAccountUseCase.fetch({ id: this.bankAccount?.id! })
      .then(() => {
        this.getBankAccount(this.bankAccount?.id!);
      })
      .finally(() => {
        this._setIsLoading(false);
      });
  }

  @action public withdraw() {
    const payload: IOperationPayload = {
      id: this.bankAccount?.id!,
      money: this.withdrawSum,
    };

    (async () => {
      await this._withdrawMoneyUseCase.fetch(payload);
    })();
  }

  @action public refill() {
    const payload: IOperationPayload = {
      id: this.bankAccount?.id!,
      money: this.refillSum,
    };

    (async () => {
      await this._refillMoneyUseCase.fetch(payload);
    })();
  }

  public sendMoney = (receiverId: string, money: number) => {
    (async () => {
      await this._sendMoneyUseCase.fetch({
        senderId: this.bankAccount?.id!,
        receiverId,
        money,
      });
    })();
  };
}
