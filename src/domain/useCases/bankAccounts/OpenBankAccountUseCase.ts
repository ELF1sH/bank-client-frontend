import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { IBankAccountRepository } from '../../repositories/api/interfaces/IBankAccountRepository';
import { IBankAccount } from '../../entities/bankAccounts/bankAccount';

export class OpenBankAccountUseCase {
  public constructor(
    private _bankAccountRepository: IBankAccountRepository,
    private readonly _onError: ShowErrorFunction,
    private readonly _onSuccess: ShowSuccessNotificationFunction,
  ) { }

  public async openBankAccount(): Promise<IBankAccount | void> {
    return this._bankAccountRepository.openBankAccount()
      .then((value) => {
        this._onSuccess(SuccessNotificationType.SUCCESSFULLY_CREATED);

        return value;
      })
      .catch((e) => {
        this._onError(ErrorNotificationType.FAILED_TO_SEND_DATA);

        console.log(e);
      });
  }
}
