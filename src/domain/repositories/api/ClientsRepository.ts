import axios, { AxiosResponse } from 'axios';

import { IClientsRepository } from './interfaces/IClientsRepository';
import { IClient } from '../../entities/users/client';

class ClientsRepository implements IClientsRepository {
  getClient(payload: { id: string }) {
    const { id } = payload;

    return axios
      .get(`/client?id=${id}`)
      .then((response: AxiosResponse<IClient>) => response.data);
  }
}

export const clientsRepository = new ClientsRepository();
