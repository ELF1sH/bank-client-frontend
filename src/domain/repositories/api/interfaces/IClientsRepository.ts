import { IPaginationResponse } from '../../../entities/common/pagination';
import { IClient } from '../../../entities/users/client';

export interface IClientsRepository {
  getClient: (payload: { id: string }) => Promise<IClient>;
}

export interface IGetClientsResponse extends IPaginationResponse {
  clients: IClient[];
}
