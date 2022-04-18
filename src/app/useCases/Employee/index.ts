import { EmployeeRepository } from '../../repositories/implementations/EmployeeRepository';
import { EmployeeController } from './EmployeeController';
import { CreateEmployeeUseCase } from './CreateEmployeeUseCase';
import { GetEmployeeUseCase } from './GetEmployeeUseCase';

const employeeRepository = new EmployeeRepository();

const createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepository);
const getEmployeeUseCase = new GetEmployeeUseCase(employeeRepository);

const employeeController = new EmployeeController(
  createEmployeeUseCase,
  getEmployeeUseCase
);

export { createEmployeeUseCase, employeeController };
