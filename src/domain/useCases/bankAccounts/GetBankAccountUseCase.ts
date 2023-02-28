import { IBankAccount } from '../../entities/bankAccounts/bankAccount';
import { APIUseCase } from '../common/APIUseCase';

export class GetBankAccountUseCase extends APIUseCase<{ id: string }, IBankAccount> { }
