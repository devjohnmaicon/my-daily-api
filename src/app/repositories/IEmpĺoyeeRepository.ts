import { Employee } from '../entities/Employee';
import { GetByEmailPropsDTO } from '../useCases/Employee/EmployeeDTO';

export interface IEmployeeRepository {
  save(empolyee: Employee): Promise<Employee>;
  getEmployee(email: string): Promise<Employee>;
}
