import { Request, Response } from 'express';
import { CreateEmployeeUseCase } from './CreateEmployeeUseCase';
import { CreateEmployeePropsDTO } from './EmployeeDTO';
import { GetEmployeesUseCase } from './GetEmployeesUseCase';

export class EmployeeController {
  constructor(
    private createEmployeeUseCase: CreateEmployeeUseCase,
    private getEmployeesUseCase: GetEmployeesUseCase
  ) {}

  async index(request: Request, response: Response): Promise<Response> {
    try {
      const employees = await this.getEmployeesUseCase.execute();

      return response.json(employees);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }

  async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      password,
      role,
      balance,
      profile_photo,
      shop,
    }: CreateEmployeePropsDTO = request.body;

    try {
      await this.createEmployeeUseCase.execute({
        name,
        password,
        role,
        balance,
        profile_photo,
        shop,
      });

      return response.status(200).json({ message: 'Salvo com sucesso' });
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}
