import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { IBankAccount } from '../../entities/bankAccounts/bankAccount';
import { APIUseCase } from '../common/APIUseCase';

export class CloseBankAccountUseCase extends APIUseCase<{id: string}, IBankAccount> {
  public constructor(
    requestCallback: (payload: {id: string}) => Promise<IBankAccount>,
    onError: ShowErrorFunction,
    onSuccess: ShowSuccessNotificationFunction,
  ) {
    super(
      requestCallback,
      onError,
      onSuccess,
      ErrorNotificationType.FAILED_TO_SEND_DATA,
      SuccessNotificationType.SUCCESSFULLY_CLOSED,
    );
  }
}
