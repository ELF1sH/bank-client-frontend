import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from '../../../modules/notification/types';
import { IBankAccountRepository } from '../../repositories/api/interfaces/IBankAccountRepository';
import { IBankAccount } from '../../entities/bankAccounts/bankAccount';

export class CloseBankAccountUseCase {
  public constructor(
    private _bankAccountRepository: IBankAccountRepository,
    private readonly _onError: ShowErrorFunction,
    private readonly _onSuccess: ShowSuccessNotificationFunction,
  ) { }

  public async closeBankAccount(bankAccountId: string): Promise<IBankAccount | void> {
    return this._bankAccountRepository.closeBankAccount(bankAccountId)
      .then((value) => {
        this._onSuccess(SuccessNotificationType.SUCCESSFULLY_CLOSED);

        return value;
      })
      .catch((e) => {
        this._onError(ErrorNotificationType.FAILED_TO_SEND_DATA);

        console.log(e);
      });
  }
}
