import { Employee } from "../../entities/Employee";

export interface CreateDailyPropsDTO {
  type: string;
  value: number;
  date: string;
  description: string;
  employee: Employee
}
