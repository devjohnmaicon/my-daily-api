import { DailyRepository } from '../../repositories/implementations/DailyRepository';
import { CreateDailyUseCase } from './CreateDailyUseCase';
import { DailyController } from './DailyController';
import { UpdateDailyUseCase } from './UpdateDailyUseCase';

const dailyRepository = new DailyRepository();
const createDailyUseCase = new CreateDailyUseCase(dailyRepository);
const updateDailyUseCase = new UpdateDailyUseCase(dailyRepository);

const dailyController = new DailyController(
  createDailyUseCase,
  updateDailyUseCase
);

export { createDailyUseCase, dailyController };
