import { IClientsRepository } from '../../repositories/api/interfaces/IClientsRepository';
import { ErrorNotificationType, ShowErrorFunction } from '../../../modules/notification/types';
import { IClient } from '../../entities/users/client';

export class GetClientUseCase {
  public constructor(
    private _clientsRepository: IClientsRepository,
    private readonly _onError: ShowErrorFunction,
  ) { }

  public async getClient(id: string): Promise<IClient | void> {
    return this._clientsRepository.getClient(id)
      .catch(() => {
        this._onError(ErrorNotificationType.FAILED_TO_FETCH_DATA);
      });
  }
}
