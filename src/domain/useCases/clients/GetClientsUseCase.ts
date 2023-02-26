import { IClientsRepository, IGetClientsResponse } from '../../repositories/api/interfaces/IClientsRepository';
import { IPaginationRequest } from '../../entities/common/pagination';
import { ErrorNotificationType, ShowErrorFunction } from '../../../modules/notification/types';

export class GetClientsUseCase {
  public constructor(
    private _clientsRepository: IClientsRepository,
    private readonly _onError: ShowErrorFunction,
  ) { }

  public async getClients(
    currentPage: number,
    itemsPerPage: number,
  ): Promise<IGetClientsResponse | null> {
    const pagination: IPaginationRequest = {
      currentPage,
      itemsPerPage,
    };

    let clients: IGetClientsResponse | null = null;

    try {
      clients = await this._clientsRepository.getClients(pagination);
    } catch (e) {
      this._onError(ErrorNotificationType.FAILED_TO_FETCH_DATA);
      console.log(e);
    }

    return clients;
  }
}
