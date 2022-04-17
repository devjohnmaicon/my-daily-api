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
    employee,
  }: CreateDailyPropsDTO): Promise<Daily | Error> {
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
