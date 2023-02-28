import { IClient } from '../../entities/users/client';
import { APIUseCase } from '../common/APIUseCase';

export class GetClientUseCase extends APIUseCase<{ id: string }, IClient> { }
