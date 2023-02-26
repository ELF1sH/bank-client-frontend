import { IBankAccountRepository } from '../../repositories/api/interfaces/IBankAccountRepository';
import { ErrorNotificationType, ShowErrorFunction } from '../../../modules/notification/types';
import { IBankAccount } from '../../entities/bankAccounts/bankAccount';

export class GetBankAccountUseCase {
  public constructor(
    private _bankAccountRepository: IBankAccountRepository,
    private readonly _onError: ShowErrorFunction,
  ) { }

  public getBankAccount(id: string): Promise<IBankAccount | void> {
    return this._bankAccountRepository.getBankAccount(id)
      .catch((e) => {
        this._onError(ErrorNotificationType.FAILED_TO_FETCH_DATA);
        console.log(e);
      });
  }
}
