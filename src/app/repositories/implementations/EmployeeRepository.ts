import { getRepository } from 'typeorm';
import { Employee } from '../../entities/Employee';
import { IEmployeeRepository } from '../IEmpĺoyeeRepository';

export class EmployeeRepository implements IEmployeeRepository {
  async save(employee: Employee): Promise<Employee> {
    const repo = getRepository(Employee);

    return repo.save(employee);
  }

  getEmployees(): Promise<Employee[]> {
    const repo = getRepository(Employee);

    return repo.find({
      relations: ['shop', 'role', 'dailies'],
      loadRelationIds: { relations: [, 'shop'] },
    });
  }
}
