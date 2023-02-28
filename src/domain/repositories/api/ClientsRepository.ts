import axios, { AxiosResponse } from 'axios';

import { IClientsRepository, IGetClientsResponse } from './interfaces/IClientsRepository';
import { IPaginationRequest } from '../../entities/common/pagination';
import { mockGettingClientsList, mockCreatingClient, mockGettingClient } from './mocks/clientsMocks';
import { IClient, ICreateClientPayload } from '../../entities/users/client';

mockGettingClientsList();
mockGettingClient();
mockCreatingClient();

class ClientsRepository implements IClientsRepository {
  getClient(payload: { id: string }) {
    const { id } = payload;

    return axios
      .get(`/client?id=${id}`)
      .then((response: AxiosResponse<IClient>) => response.data);
  }
}

export const clientsRepository = new ClientsRepository();
