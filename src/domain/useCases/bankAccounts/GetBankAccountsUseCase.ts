import { IBankAccountRepository } from '../../repositories/api/interfaces/IBankAccountRepository';
import { ErrorNotificationType, ShowErrorFunction } from '../../../modules/notification/types';
import { IBankAccount } from '../../entities/bankAccounts/bankAccount';

export class GetBankAccountsUseCase {
  public constructor(
    private _bankAccountRepository: IBankAccountRepository,
    private readonly _onError: ShowErrorFunction,
  ) { }

  public getBankAccounts(id: string): Promise<IBankAccount[] | void> {
    return this._bankAccountRepository.getBankAccounts(id)
      .catch((e) => {
        this._onError(ErrorNotificationType.FAILED_TO_FETCH_DATA);
        console.log(e);
      });
  }
}
