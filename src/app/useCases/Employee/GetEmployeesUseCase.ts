import { Employee } from '../../entities/Employee';
import { IEmployeeRepository } from '../../repositories/IEmpĺoyeeRepository';

export class GetEmployeesUseCase {
  constructor(private employeeRepository: IEmployeeRepository) {}

  public async execute(): Promise<Employee[]> {
    const employees = await this.employeeRepository.getEmployees();

    return employees;
  }
}
