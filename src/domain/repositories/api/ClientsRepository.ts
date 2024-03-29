import { AxiosResponse } from 'axios';

import { axiosInstance, axiosInstance as axios } from '../axiosInstance';
import { IClientsRepository } from './interfaces/IClientsRepository';
import { IClient } from '../../entities/users/client';

class ClientsRepository implements IClientsRepository {
  getClient(payload: { id: string }) {
    const { id } = payload;

    return axiosInstance
      .get(`/clients/${id}`)
      .then((response: AxiosResponse<IClient>) => response.data);
  }
}

export const clientsRepository = new ClientsRepository();
