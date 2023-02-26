import {
  action, computed, makeObservable, observable, runInAction,
} from 'mobx';

import { LoginUseCase } from '../../../../domain/useCases/auth/LoginUseCase';
import { ILoginPayload } from '../../../../domain/entities/auth/auth';

export class AuthViewModel {
  @observable private _isLoading: boolean = false;

  constructor(
    private _loginUseCase: LoginUseCase | null = null,
  ) {
    makeObservable(this);
  }

  @computed public get isLoading(): boolean {
    return this._isLoading;
  }

  @action public async login(username: string, password: string) {
    const loginPayload = {
      username,
      password,
    } as ILoginPayload;

    runInAction(() => {
      this._isLoading = true;
    });

    await this._loginUseCase?.login(loginPayload);

    runInAction(() => {
      this._isLoading = false;
    });
  }
}
