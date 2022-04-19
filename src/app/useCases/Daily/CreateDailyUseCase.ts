import { Daily } from '../../entities/Daily';
import { IDailyRepository } from '../../repositories/IDailyRepository';
import { CreateDailyDTO } from './DailyDTO';

export class CreateDailyUseCase {
  constructor(private dailyRepository: IDailyRepository) {}

  public async execute({
    type,
    value,
    date,
    description,
    employee,
  }: CreateDailyDTO): Promise<Daily | Error> {
    const daily = new Daily({
      type,
      value,
      date,
      description,
      employee,
    });

    const newDaily = await this.dailyRepository.save(daily);

    return newDaily;
  }
}
