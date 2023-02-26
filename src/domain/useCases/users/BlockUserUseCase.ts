import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { IUsersRepository } from '../../repositories/api/interfaces/IUsersRepository';
import { IUser } from '../../entities/users/user';

export class BlockUserUseCase {
  constructor(
    private _usersRepository: IUsersRepository,
    private readonly _onError: ShowErrorFunction,
    private readonly _onSuccess: ShowSuccessNotificationFunction,
  ) { }

  public blockUser(id: string): Promise<IUser | void> {
    return this._usersRepository.blockUser(id)
      .then((value) => {
        this._onSuccess(SuccessNotificationType.SUCCESSFULLY_BLOCKED);
        return value;
      })
      .catch((e) => {
        this._onError(ErrorNotificationType.FAILED_TO_SEND_DATA);
        console.log(e);
      });
  }
}
