import { Employee } from '../../entities/Employee';
import { IEmployeeRepository } from '../../repositories/IEmpĺoyeeRepository';
import { CreateEmployeePropsDTO } from './EmployeeDTO';

export class CreateEmployeeUseCase {
  constructor(private employeeRepository: IEmployeeRepository) {}

  public async execute({
    name,
    role,
    balance,
    profile_photo,
    shop,
  }: CreateEmployeePropsDTO): Promise<Employee | Error> {
    const employee = new Employee({
      name,
      role,
      balance,
      profile_photo,
      shop,
    });

    const newEmployee = await this.employeeRepository.save(employee);

    return newEmployee;
  }
}
