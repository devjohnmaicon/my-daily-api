import { Daily } from '../entities/Daily';

export interface IDailyRepository {
  save(daily: Daily): Promise<Daily>;
}
