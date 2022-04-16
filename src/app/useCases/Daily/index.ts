import { DailyRepository } from '../../repositories/implementations/DailyRepository';
import { CreateDailyUseCase } from './CreateDailyUseCase';
import { DailyController } from './EmployeeController';

const dailyRepository = new DailyRepository();
const createDailyUseCase = new CreateDailyUseCase(dailyRepository);

const dailyController = new DailyController(createDailyUseCase);

export { createDailyUseCase, dailyController };
