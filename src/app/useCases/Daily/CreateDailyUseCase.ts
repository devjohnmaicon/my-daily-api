import { Daily } from '../../entities/Daily';
import { IDailyRepository } from '../../repositories/IDailyRepository';
import { CreateDailyPropsDTO } from './DailyDTO';

export class CreateDailyUseCase {
  constructor(private dailyRepository: IDailyRepository) {}

  public async execute({
    type,
    value,
    date,
    description,
  }: CreateDailyPropsDTO): Promise<Daily | Error> {
    const daily = new Daily({
      type,
      value,
      date,
      description,
    });

    const newDaily = await this.dailyRepository.save(daily);

    return newDaily;
  }
}
