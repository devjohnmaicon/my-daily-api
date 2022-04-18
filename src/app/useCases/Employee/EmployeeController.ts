import { Request, Response } from 'express';
import { CreateEmployeeUseCase } from './CreateEmployeeUseCase';
import { CreateEmployeePropsDTO, GetByEmailPropsDTO } from './EmployeeDTO';
import { GetEmployeeUseCase } from './GetEmployeeUseCase';

export class EmployeeController {
  constructor(
    private createEmployeeUseCase: CreateEmployeeUseCase,
    private getEmployeeUseCase: GetEmployeeUseCase
  ) {}

  async getByEmail(request: Request, response: Response): Promise<Response> {
    const { email, password }: GetByEmailPropsDTO = request.body;

    try {
      const employee = await this.getEmployeeUseCase.execute(email);

      return response.status(200).json(employee);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }

  async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      role,
      balance,
      profile_photo,
      shop,
    }: CreateEmployeePropsDTO = request.body;

    try {
      await this.createEmployeeUseCase.execute({
        name,
        email,
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
