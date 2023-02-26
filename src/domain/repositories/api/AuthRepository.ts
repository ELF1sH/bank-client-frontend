import axios, { AxiosResponse } from 'axios';

import { IAuthRepository } from './interfaces/IAuthRepository';
import { ILoginPayload, ILoginResponse } from '../../entities/auth/auth';
import { mockLogin } from './mocks/authMocks';

mockLogin();

class AuthRepository implements IAuthRepository {
  public login(payload: ILoginPayload) {
    return axios
      .post('/login', payload)
      .then((response: AxiosResponse<ILoginResponse>) => response.data);
  }
}

export const authRepository = new AuthRepository();
