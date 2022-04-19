import { Daily } from '../../entities/Daily';
import { IDailyRepository } from '../../repositories/IDailyRepository';
import { UpdateDailyDTO } from './DailyDTO';

export class UpdateDailyUseCase {
  constructor(private dailyRepository: IDailyRepository) {}

  public async execute({
    id,
    type,
    value,
    date,
    description,
  }: UpdateDailyDTO): Promise<Daily | Error> {
    const daily = new Daily({
      id,
      type,
      value,
      date,
      description,
    });

    const newDaily = await this.dailyRepository.save(daily);

    return newDaily;
  }
}
