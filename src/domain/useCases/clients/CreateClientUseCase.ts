import { IClientsRepository } from '../../repositories/api/interfaces/IClientsRepository';
import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { IClient, ICreateClientPayload } from '../../entities/users/client';

export class CreateClientUseCase {
  public constructor(
    private _clientsRepository: IClientsRepository,
    private readonly _onError: ShowErrorFunction,
    private readonly _onSuccess: ShowSuccessNotificationFunction,
  ) { }

  public async createClient(payload: ICreateClientPayload): Promise<IClient | void> {
    return this._clientsRepository.createClient(payload)
      .then((value) => {
        this._onSuccess(SuccessNotificationType.SUCCESSFULLY_CREATED);
        return value;
      })
      .catch(() => {
        this._onError(ErrorNotificationType.FAILED_TO_SEND_DATA);
      });
  }
}
