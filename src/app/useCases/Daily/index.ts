import { DailyRepository } from '../../repositories/implementations/DailyRepository';
import { CreateDailyUseCase } from './CreateDailyUseCase';
import { DailyController } from './DailyController';
import { DeleteDailyUseCase } from './DeleteDailyUseCase';
import { UpdateDailyUseCase } from './UpdateDailyUseCase';

const dailyRepository = new DailyRepository();
const createDailyUseCase = new CreateDailyUseCase(dailyRepository);
const updateDailyUseCase = new UpdateDailyUseCase(dailyRepository);
const deleteDailyUseCase = new DeleteDailyUseCase(dailyRepository);

const dailyController = new DailyController(
  createDailyUseCase,
  updateDailyUseCase,
  deleteDailyUseCase
);

export { createDailyUseCase, dailyController };
