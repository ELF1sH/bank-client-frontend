import {
  action, computed, makeObservable, observable, toJS,
} from 'mobx';

import { FieldData } from '../../../utils/form/fieldData';
import { fieldsData } from './fieldsData';
import { ICreateCreditTariffPayload } from '../../../domain/entities/credit/creditTariff';
import { CreateCreditTariffUseCase } from '../../../domain/useCases/credits/CreateCreditTariffUseCase';

export class CreateTariffModalViewModel {
  @observable private _fieldsData: FieldData[] = fieldsData;

  public constructor(
    private _createCreditTariffUseCase: CreateCreditTariffUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get fieldsData() {
    return toJS(this._fieldsData);
  }

  @action public setFieldsData(fieldsData: FieldData[]) {
    this._fieldsData = fieldsData;
  }

  @action public async createTariff() {
    const tariffPayloadArray = this.fieldsData.map((field) => (
      {
        [field.name.toString()]: field.value,
      }
    ));

    const tariffPayload = { ...tariffPayloadArray } as unknown as ICreateCreditTariffPayload;

    await this._createCreditTariffUseCase.createCreditTariff(tariffPayload);

    window.location.reload();
  }
}
