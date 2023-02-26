import { ErrorNotificationType, ShowErrorFunction } from '../../../modules/notification/types';
import { ICreditRepository } from '../../repositories/api/interfaces/ICreditRepository';
import { ICreditTariff } from '../../entities/credit/creditTariff';

export class GetCreditTariffsUseCase {
  public constructor(
    private _creditRepository: ICreditRepository,
    private readonly _onError: ShowErrorFunction,
  ) { }

  public async getCreditTariffs(): Promise<ICreditTariff[] | void> {
    return this._creditRepository
      .getCreditTariffs()
      .catch((e) => {
        this._onError(ErrorNotificationType.FAILED_TO_FETCH_DATA);

        console.log(e);
      });
  }
}
