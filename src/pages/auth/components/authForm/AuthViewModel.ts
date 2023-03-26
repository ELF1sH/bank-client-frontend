import {
  action, computed, makeObservable, observable, runInAction,
} from 'mobx';

export class AuthViewModel {
  @observable private _isLoading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @computed public get isLoading(): boolean {
    return this._isLoading;
  }
}
