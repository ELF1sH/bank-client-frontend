import { ICreditTariff } from '../../entities/credit/creditTariff';
import { APIUseCase } from '../common/APIUseCase';

export class GetCreditTariffsUseCase extends APIUseCase<void, ICreditTariff[]> { }
