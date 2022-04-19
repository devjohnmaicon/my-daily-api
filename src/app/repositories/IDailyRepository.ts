import { Daily } from '../entities/Daily';

export interface IDailyRepository {
  save(daily: Daily): Promise<Daily>;
  getById(id: string): Promise<Daily>;
  update(daily: Daily): Promise<Daily>;
  delete(id: string): Promise<void>;
}
