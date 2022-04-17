import { Request, Response } from 'express';
import { CreateRoleUseCase } from './CreateRoleUseCase';

export class RoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase) {}

  async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    try {
      const role = await this.createRoleUseCase.execute({
        name,
        description,
      });

      return response.json(role);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}
