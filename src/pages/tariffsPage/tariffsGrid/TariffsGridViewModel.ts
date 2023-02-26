import {
  action, computed, makeObservable, observable, runInAction, toJS,
} from 'mobx';

import { ICreditTariff } from '../../../domain/entities/credit/creditTariff';
import { GetCreditTariffsUseCase } from '../../../domain/useCases/credits/GetCreditTariffsUseCase';

export class TariffsGridViewModel {
  @observable private _tariffs: ICreditTariff[] = [];

  @observable private _isLoading: boolean = false;

  constructor(
    private _getCreditTariffsUseCase: GetCreditTariffsUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get tariffs(): ICreditTariff[] {
    return toJS(this._tariffs);
  }

  @computed public get isLoading(): boolean {
    return this._isLoading;
  }

  @action public async fetchTariffs(): Promise<void> {
    runInAction(() => {
      this._isLoading = true;
    });

    const tariffs = await this._getCreditTariffsUseCase.getCreditTariffs();

    this.updateTariffs(tariffs ?? []);

    runInAction(() => {
      this._isLoading = false;
    });
  }

  @action public updateTariffs(tariffs: ICreditTariff[]): void {
    runInAction(() => {
      this._tariffs = tariffs;
    });
  }
}
