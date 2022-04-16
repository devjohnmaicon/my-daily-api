import { getRepository } from 'typeorm';
import { Daily } from '../../entities/Daily';
import { IDailyRepository } from '../IDailyRepository';

export class DailyRepository implements IDailyRepository {
  async save(daily: Daily): Promise<Daily> {
    const repo = getRepository(Daily);

    const newDaily = await repo.save(daily);

    return newDaily;
  }
}
