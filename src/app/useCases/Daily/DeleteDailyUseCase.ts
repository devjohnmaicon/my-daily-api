import { Daily } from '../../entities/Daily';
import { IDailyRepository } from '../../repositories/IDailyRepository';
import { UpdateDailyDTO } from './DailyDTO';

export class DeleteDailyUseCase {
  constructor(private dailyRepository: IDailyRepository) {}

  public async execute(id: string): Promise<void | Error> {
    await this.dailyRepository.delete(id);
  }
}
