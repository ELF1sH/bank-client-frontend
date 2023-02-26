import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { ICreditRepository } from '../../repositories/api/interfaces/ICreditRepository';
import { ICreateCreditTariffPayload, ICreditTariff } from '../../entities/credit/creditTariff';

export class CreateCreditTariffUseCase {
  public constructor(
    private _creditRepository: ICreditRepository,
    private readonly _onError: ShowErrorFunction,
    private readonly _onSuccess: ShowSuccessNotificationFunction,
  ) { }

  public async createCreditTariff(
    payload: ICreateCreditTariffPayload,
  ): Promise<void> {
    return this._creditRepository.createCreditTariff(payload)
      .then(() => {
        this._onSuccess(SuccessNotificationType.SUCCESSFULLY_CREATED);
      })
      .catch(() => {
        this._onError(ErrorNotificationType.FAILED_TO_SEND_DATA);
      });
  }
}
