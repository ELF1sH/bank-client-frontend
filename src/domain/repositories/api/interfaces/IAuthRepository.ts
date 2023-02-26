import { ILoginPayload, ILoginResponse } from '../../../entities/auth/auth';

export interface IAuthRepository {
  login: (payload: ILoginPayload) => Promise<ILoginResponse>;
}
