import { getRepository } from 'typeorm';
import { Daily } from '../../entities/Daily';
import { IDailyRepository } from '../IDailyRepository';

export class DailyRepository implements IDailyRepository {
  async save(daily: Daily): Promise<Daily> {
    const repo = getRepository(Daily);

    const newDaily = await repo.save(daily);

    return newDaily;
  }

  async update(daily: Daily): Promise<any> {
    const repo = getRepository(Daily);

    const updateDaily = await repo.update({ id: daily.id }, daily);

    return updateDaily;
  }
}
