import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { IOperationPayload } from '../../repositories/api/interfaces/IBankAccountRepository';
import { IBankAccount } from '../../entities/bankAccounts/bankAccount';
import { APIUseCase } from '../common/APIUseCase';

export class WithdrawMoneyUseCase extends APIUseCase<IOperationPayload, void> {
  public constructor(
    requestCallback: (payload: IOperationPayload) => Promise<void>,
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
