import { APIUseCase } from '../common/APIUseCase';
import { ICreditAccount } from '../../entities/credit/creditAccount';

export class GetCreditAccountUseCase extends APIUseCase<{ id: string }, ICreditAccount> { }
