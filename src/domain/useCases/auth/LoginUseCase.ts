import { AxiosError } from 'axios';
import { NavigateFunction } from 'react-router-dom';

import { IAuthRepository } from '../../repositories/api/interfaces/IAuthRepository';
import { ILoginPayload, ILoginResponse } from '../../entities/auth/auth';
import { ITokenRepository } from '../../repositories/other/interfaces/ITokenRepository';
import { ShowErrorFunction, ErrorNotificationType } from '../../../modules/notification/types';

export class LoginUseCase {
  constructor(
    private readonly _authRepository: IAuthRepository,
    private readonly _tokenRepository: ITokenRepository,
    private readonly _onError: ShowErrorFunction,
    private readonly _navigate: NavigateFunction,
  ) { }

  public async login(loginPayload: ILoginPayload): Promise<ILoginResponse | void> {
    try {
      const res = await this._authRepository?.login(loginPayload);

      const accessToken = res?.accessToken;

      if (accessToken) {
        this._tokenRepository?.setAccessToken(accessToken);
      }

      this._navigate('/profile');
    } catch (e) {
      const axiosError = (e as AxiosError).response;

      if (axiosError?.status === 400) {
        this._onError(ErrorNotificationType.INCORRECT_LOGIN_OR_PASSWORD);
      }
    }
  }
}
