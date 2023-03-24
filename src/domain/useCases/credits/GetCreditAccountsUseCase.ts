import { APIUseCase } from '../common/APIUseCase';
import { ICreditAccount } from '../../entities/credit/creditAccount';

export class GetCreditAccountsUseCase extends APIUseCase<{ id: string }, ICreditAccount[]> { }
