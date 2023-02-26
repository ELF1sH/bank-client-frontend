import { mock } from './common';
import { getClientsResponse } from './data/getClientsResponse';
import { getClientResponse } from './data/getClientResponse';

export const mockGettingClient = () => {
  mock
    .onGet(/\/client\?id=*/)
    .reply(() => [200, getClientResponse]);
};

export const mockGettingClientsList = () => {
  mock
    .onGet(/\/clients\?currentPage*/)
    .reply(() => [200, getClientsResponse]);
};

export const mockCreatingClient = () => {
  mock
    .onPost('/create-client')
    .reply(() => [200, getClientResponse]);
};
