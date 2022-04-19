import { DailyRepository } from '../../repositories/implementations/DailyRepository';
import { CreateDailyUseCase } from './CreateDailyUseCase';
import { DailyController } from './DailyController';
import { DeleteDailyUseCase } from './DeleteDailyUseCase';
import { GetDailyUseCase } from './GetDailyUseCase';
import { UpdateDailyUseCase } from './UpdateDailyUseCase';

const dailyRepository = new DailyRepository();
const createDailyUseCase = new CreateDailyUseCase(dailyRepository);
const updateDailyUseCase = new UpdateDailyUseCase(dailyRepository);
const deleteDailyUseCase = new DeleteDailyUseCase(dailyRepository);
const getDailyUseCase = new GetDailyUseCase(dailyRepository);

const dailyController = new DailyController(
  createDailyUseCase,
  updateDailyUseCase,
  deleteDailyUseCase,
  getDailyUseCase
);

export { createDailyUseCase, dailyController };
