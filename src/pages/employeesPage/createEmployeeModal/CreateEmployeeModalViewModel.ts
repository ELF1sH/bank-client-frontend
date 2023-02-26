import {
  action, computed, makeObservable, observable, toJS,
} from 'mobx';

import { FieldData } from '../../../utils/form/fieldData';
import { fieldsData } from './fieldsData';
import { CreateEmployeeUseCase } from '../../../domain/useCases/employees/CreateEmployeeUseCase';
import { ICreateEmployeePayload } from '../../../domain/entities/users/employee';

export class CreateEmployeeModalViewModel {
  @observable private _fieldsData: FieldData[] = fieldsData;

  public constructor(
    private _createEmployeeUseCase: CreateEmployeeUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get fieldsData() {
    return toJS(this._fieldsData);
  }

  @action public setFieldsData(fieldsData: FieldData[]) {
    this._fieldsData = fieldsData;
  }

  @action public async createEmployee() {
    const employeePayloadArray = this.fieldsData.map((field) => (
      {
        [field.name.toString()]: field.value,
      }
    ));

    const employeePayload = { ...employeePayloadArray } as unknown as ICreateEmployeePayload;

    return this._createEmployeeUseCase.createEmployee(employeePayload);
  }
}
