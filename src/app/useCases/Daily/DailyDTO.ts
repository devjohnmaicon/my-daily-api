import { Employee } from '../../entities/Employee';

export interface CreateDailyDTO {
  type: string;
  value: number;
  date: string;
  description: string;
  employee: Employee;
}

export interface UpdateDailyDTO {
  id: string
  type: string;
  value: number;
  date: string;
  description: string;
}
