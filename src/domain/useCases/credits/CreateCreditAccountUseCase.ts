import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { APIUseCase } from '../common/APIUseCase';
import {
  ICreateCreditAccountPayload,
  ICreateCreditAccountResponse,
} from '../../repositories/api/interfaces/ICreditRepository';

export class CreateCreditAccountUseCase extends APIUseCase<
  ICreateCreditAccountPayload,
  ICreateCreditAccountResponse
> {
  constructor(
    requestCallback:
      (payload: ICreateCreditAccountPayload) => Promise<ICreateCreditAccountResponse>,
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
