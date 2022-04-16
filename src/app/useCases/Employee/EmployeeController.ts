import { Request, Response } from 'express';
import { CreateEmployeeUseCase } from './CreateEmployeeUseCase';

export class EmployeeController {
  constructor(private createEmployeeUseCase: CreateEmployeeUseCase) {}

  async create(request: Request, response: Response): Promise<Response> {
    const { name, role, balance, profile_photo, shop } = request.body;

    try {
      const employee = await this.createEmployeeUseCase.execute({
        name,
        role,
        balance,
        profile_photo,
        shop,
      });

      return response.json(employee);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}
