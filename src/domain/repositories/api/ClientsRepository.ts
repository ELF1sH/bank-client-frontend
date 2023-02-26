import axios, { AxiosResponse } from 'axios';

import { IClientsRepository, IGetClientsResponse } from './interfaces/IClientsRepository';
import { IPaginationRequest } from '../../entities/common/pagination';
import { mockGettingClientsList, mockCreatingClient, mockGettingClient } from './mocks/clientsMocks';
import { IClient, ICreateClientPayload } from '../../entities/users/client';

mockGettingClientsList();
mockGettingClient();
mockCreatingClient();

class ClientsRepository implements IClientsRepository {
  getClients(pagination: IPaginationRequest) {
    return axios
      .get(`/clients?currentPage=${pagination.currentPage}&itemsPerPage=${pagination.itemsPerPage}`)
      .then((response: AxiosResponse<IGetClientsResponse>) => response.data);
  }

  getClient(id: string) {
    return axios
      .get(`/client?id=${id}`)
      .then((response: AxiosResponse<IClient>) => response.data);
  }

  createClient(payload: ICreateClientPayload) {
    return axios
      .post('/create-client', payload)
      .then((response: AxiosResponse<IClient>) => response.data);
  }
}

export const clientsRepository = new ClientsRepository();
