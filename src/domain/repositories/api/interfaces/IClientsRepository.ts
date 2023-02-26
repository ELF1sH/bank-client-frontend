import { IPaginationRequest, IPaginationResponse } from '../../../entities/common/pagination';
import { IClient, ICreateClientPayload } from '../../../entities/users/client';

export interface IClientsRepository {
  getClients: (pagination: IPaginationRequest) => Promise<IGetClientsResponse>;
  getClient: (id: string) => Promise<IClient>;
  createClient: (payload: ICreateClientPayload) => Promise<IClient>;
}

export interface IGetClientsResponse extends IPaginationResponse {
  clients: IClient[];
}
