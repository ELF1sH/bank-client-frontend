import { ILoginResponse } from '../../../entities/auth/auth';
import { mock } from './common';

export const mockLogin = () => {
  mock
    .onPost('/login')
    .reply((config) => {
      const data = JSON.parse(config.data);

      if (data.username === 'admin' && data.password === 'admin') {
        return [200, { accessToken: 'qwerty123456' } as ILoginResponse];
      }

      return [400];
    });
};
