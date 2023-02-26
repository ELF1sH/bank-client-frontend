import { mock } from './common';
import { getClientResponseBlocked } from './data/getClientResponse';

export const mockUserBlocking = () => {
  mock
    .onPost(/\/block-user*/)
    .reply(() => [200, getClientResponseBlocked]);
};
