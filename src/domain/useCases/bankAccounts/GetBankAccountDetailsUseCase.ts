import { IBankAccountDetails } from '../../entities/bankAccounts/bankAccount';
import { APIUseCase } from '../common/APIUseCase';

export class GetBankAccountDetailsUseCase extends APIUseCase<
  { id: string },
  IBankAccountDetails
> { }
