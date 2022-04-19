import { getRepository } from 'typeorm';
import { Daily } from '../../entities/Daily';
import { IDailyRepository } from '../IDailyRepository';

export class DailyRepository implements IDailyRepository {
  async save(daily: Daily): Promise<Daily> {
    const repo = getRepository(Daily);

    return await repo.save(daily);
  }

  async getById(id: string): Promise<Daily> {
    const repo = getRepository(Daily);

    return await repo.findOne(id);
  }

  async update(daily: Daily): Promise<any> {
    const repo = getRepository(Daily);

    return await repo.update({ id: daily.id }, daily);
  }

  async delete(id: string): Promise<void> {
    const repo = getRepository(Daily);

    await repo.delete(id);
  }
}
