import { IOperation } from '../../entities/bankAccounts/operation';
import { APIUseCase } from '../common/APIUseCase';

export class GetOperationsHistoryUseCase extends APIUseCase<{ id: string }, IOperation[]> { }
