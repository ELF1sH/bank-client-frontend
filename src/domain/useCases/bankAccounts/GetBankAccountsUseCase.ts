import { IBankAccount } from '../../entities/bankAccounts/bankAccount';
import { APIUseCase } from '../common/APIUseCase';

export class GetBankAccountsUseCase extends APIUseCase<{ id: string }, IBankAccount[]> { }
