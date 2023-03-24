import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { APIUseCase } from '../common/APIUseCase';

export class CreateBankAccountUseCase extends APIUseCase<{ ownerId: string }, { id: string }> {
  public constructor(
    requestCallback: (payload: { ownerId: string }) => Promise<{ id: string }>,
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
