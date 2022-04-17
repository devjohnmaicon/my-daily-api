import { getRepository } from 'typeorm';
import { Employee } from '../../entities/Employee';
import { IEmployeeRepository } from '../IEmpĺoyeeRepository';

export class EmployeeRepository implements IEmployeeRepository {
  async save(employee: Employee): Promise<Employee> {
    const repo = getRepository(Employee);

    const newEmployee = await repo.save(employee);

    return newEmployee;
  }

  getEmployees(): Promise<Employee[]> {
    const repo = getRepository(Employee);

    const employees = repo.find({ relations: ['role', 'dailies'] });

    return employees;
  }
}
