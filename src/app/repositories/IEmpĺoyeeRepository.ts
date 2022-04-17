import { Employee } from '../entities/Employee';

export interface IEmployeeRepository {
  save(empolyee: Employee): Promise<Employee>;
  getEmployees(): Promise<Employee[]>;
}
