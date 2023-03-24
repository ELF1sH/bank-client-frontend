import {
  action,
  computed, makeObservable, observable, runInAction, toJS,
} from 'mobx';
import { NavigateFunction } from 'react-router-dom';

import { ICreditTariff } from '../../domain/entities/credit/creditTariff';
import { GetCreditTariffsUseCase } from '../../domain/useCases/credits/GetCreditTariffsUseCase';
import { CreateCreditAccountUseCase } from '../../domain/useCases/credits/CreateCreditAccountUseCase';

export class TakeLoanPageViewModel {
  @observable private _tariffs: ICreditTariff[] = [];

  @observable private _isLoading: boolean = true;

  @observable private _chosenTariffId: string | undefined = undefined;

  public constructor(
    private _getCreditTariffs: GetCreditTariffsUseCase,
    private _createCreditAccountUseCase: CreateCreditAccountUseCase,
    private _navigate: NavigateFunction,
  ) {
    makeObservable(this);
  }

  @computed get tariffs() {
    return toJS(this._tariffs);
  }

  @computed get isLoading() {
    return this._isLoading;
  }

  @computed get chosenTariff(): string | undefined {
    return this._chosenTariffId;
  }

  @action private _setIsLoading(val: boolean) {
    this._isLoading = val;
  }

  @action public chooseTariff = (id: string) => {
    this._chosenTariffId = id;
  };

  @action public fetchTariffs() {
    this._setIsLoading(true);

    this._getCreditTariffs.fetch()
      .then((tariffs) => {
        if (tariffs) {
          runInAction(() => {
            this._tariffs = tariffs;

            this._chosenTariffId = tariffs[0].id;

            this._setIsLoading(false);
          });
        }
      });
  }

  @action public takeLoan = async (tariffId: string, ownerId: string) => {
    this._setIsLoading(true);

    const res = await this._createCreditAccountUseCase.fetch({
      tariffId,
      ownerId,
    });

    this._setIsLoading(false);

    if (res) {
      this._navigate(`/credit-accounts/${res.id}`);
    }
  };
}
