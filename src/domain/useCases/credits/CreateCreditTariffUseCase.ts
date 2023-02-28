import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { ICreateCreditTariffPayload, ICreditTariff } from '../../entities/credit/creditTariff';
import { APIUseCase } from '../common/APIUseCase';

export class CreateCreditTariffUseCase extends APIUseCase<
  ICreateCreditTariffPayload, ICreditTariff[]
> {
  public constructor(
    requestCallback: (payload: ICreateCreditTariffPayload) => Promise<ICreditTariff[]>,
    onError: ShowErrorFunction,
    onSuccess: ShowSuccessNotificationFunction,
  ) {
    super(
      requestCallback,
      onError,
      onSuccess,
      ErrorNotificationType.FAILED_TO_SEND_DATA,
      SuccessNotificationType.SUCCESSFULLY_CREATED,
    );
  }
}
