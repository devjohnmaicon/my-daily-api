import { EmployeeRepository } from '../../repositories/implementations/EmployeeRepository';
import { EmployeeController } from './EmployeeController';
import { CreateEmployeeUseCase } from './CreateEmployeeUseCase';

const employeeRepository = new EmployeeRepository();
const createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepository);

const employeeController = new EmployeeController(
  createEmployeeUseCase
);

export { createEmployeeUseCase, employeeController };
