import { Daily } from '../../entities/Daily';
import { IDailyRepository } from '../../repositories/IDailyRepository';

export class GetDailyUseCase {
  constructor(private dailyRepository: IDailyRepository) {}

  public async execute(id: string): Promise<Daily> {
    const employee = await this.dailyRepository.getById(id);

    return employee;
  }
}
