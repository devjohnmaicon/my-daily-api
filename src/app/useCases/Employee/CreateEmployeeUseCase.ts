import { Employee } from '../../entities/Employee';
import { IEmployeeRepository } from '../../repositories/IEmpĺoyeeRepository';
import { CreateEmployeePropsDTO } from './EmployeeDTO';

export class CreateEmployeeUseCase {
  constructor(private employeeRepository: IEmployeeRepository) {}

  public async execute({
    name,
    email,
    password,
    role,
    balance,
    profile_photo,
    shop,
  }: CreateEmployeePropsDTO): Promise<Employee | Error> {
    const employee = new Employee({
      name,
      email,
      password,
      role,
      balance,
      profile_photo,
      shop,
    });

    return await this.employeeRepository.save(employee);
  }
}
