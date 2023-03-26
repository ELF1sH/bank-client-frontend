import { AxiosError } from 'axios';

import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';

export class APIUseCase<RequestPayloadType, ResponseType> {
  public constructor(
    private _requestCallback: (payload: RequestPayloadType) => Promise<ResponseType>,
    private readonly _onError: ShowErrorFunction,
    private readonly _onSuccess?: ShowSuccessNotificationFunction,
    private readonly _errorMessage: ErrorNotificationType =
    ErrorNotificationType.FAILED_TO_FETCH_DATA,
    private readonly _successMessage?: SuccessNotificationType,
  ) { }

  public fetch(payload: RequestPayloadType): Promise<ResponseType | undefined | void> {
    return this._requestCallback(payload)
      .then((data: ResponseType | undefined = undefined) => {
        if (this._successMessage && this._onSuccess) {
          this._onSuccess(this._successMessage);
        }

        return data;
      })
      .catch((e: AxiosError) => {
        if (e.response?.status === 401) {
          this._onError(ErrorNotificationType.FAILED_TO_AUTHENTICATE);
        } else if (e.response?.status === 403) {
          this._onError(ErrorNotificationType.FAILED_TO_AUTHORIZE);
        } else {
          this._onError(this._errorMessage);
        }
        console.log(e);
      });
  }
}
