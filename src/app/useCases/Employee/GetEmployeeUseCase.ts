import { Employee } from '../../entities/Employee';
import { IEmployeeRepository } from '../../repositories/IEmpĺoyeeRepository';
import { GetByEmailPropsDTO } from './EmployeeDTO';

export class GetEmployeeUseCase {
  constructor(private employeeRepository: IEmployeeRepository) {}

  public async execute(email: string ): Promise<Employee> {
    const employee = await this.employeeRepository.getEmployee(email);

    return employee;
  }
}
