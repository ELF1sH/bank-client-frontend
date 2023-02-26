import { IBankAccountRepository } from '../../repositories/api/interfaces/IBankAccountRepository';
import { ErrorNotificationType, ShowErrorFunction } from '../../../modules/notification/types';
import { IOperation } from '../../entities/bankAccounts/operation';

export class GetOperationsHistoryUseCase {
  public constructor(
    private _bankAccountRepository: IBankAccountRepository,
    private readonly _onError: ShowErrorFunction,
  ) { }

  public getOperationsHistory(id: string): Promise<IOperation[] | void> {
    return this._bankAccountRepository.getOperationsHistory(id)
      .catch((e) => {
        this._onError(ErrorNotificationType.FAILED_TO_FETCH_DATA);
        console.log(e);
      });
  }
}
