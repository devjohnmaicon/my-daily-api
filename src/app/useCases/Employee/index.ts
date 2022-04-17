import { EmployeeRepository } from '../../repositories/implementations/EmployeeRepository';
import { EmployeeController } from './EmployeeController';
import { CreateEmployeeUseCase } from './CreateEmployeeUseCase';
import { GetEmployeesUseCase } from './GetEmployeesUseCase';

const employeeRepository = new EmployeeRepository();
const createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepository);
const getEmployeesUseCase = new GetEmployeesUseCase(employeeRepository);

const employeeController = new EmployeeController(
  createEmployeeUseCase,
  getEmployeesUseCase
);

export { createEmployeeUseCase, employeeController };
