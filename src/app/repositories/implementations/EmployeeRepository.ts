import { getRepository } from 'typeorm';
import { Employee } from '../../entities/Employee';
import { IEmployeeRepository } from '../IEmpĺoyeeRepository';

export class EmployeeRepository implements IEmployeeRepository {
  async save(employee: Employee): Promise<Employee> {
    const repo = getRepository(Employee);

    return repo.save(employee);
  }

  getEmployee(email: string): Promise<Employee> {
    const repo = getRepository(Employee);

    return repo.findOne({
      where: { email },
      relations: ['shop', 'role', 'dailies'],
      loadRelationIds: { relations: ['shop'] },
    });
  }
}
