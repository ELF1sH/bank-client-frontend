import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { ISendMoneyPayload } from '../../repositories/api/interfaces/IBankAccountRepository';
import { APIUseCase } from '../common/APIUseCase';

export class SendMoneyUseCase extends APIUseCase<ISendMoneyPayload, void> {
  public constructor(
    requestCallback: (payload: ISendMoneyPayload) => Promise<void>,
    onError: ShowErrorFunction,
    onSuccess: ShowSuccessNotificationFunction,
  ) {
    super(
      requestCallback,
      onError,
      onSuccess,
      ErrorNotificationType.FAILED_TO_SEND_DATA,
      SuccessNotificationType.SUCCESSFULLY_COMPLETED,
    );
  }
}
