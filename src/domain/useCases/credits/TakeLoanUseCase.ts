import { APIUseCase } from '../common/APIUseCase';
import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction, SuccessNotificationType,
} from '../../../modules/notification/types';
import { ITakeLoanPayload, ITakeLoanResponse } from '../../repositories/api/interfaces/ICreditRepository';

export class TakeLoanUseCase extends APIUseCase<ITakeLoanPayload, ITakeLoanResponse> {
  public constructor(
    requestCallback: (payload: ITakeLoanPayload) => Promise<ITakeLoanResponse>,
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
