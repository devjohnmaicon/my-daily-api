import { Request, Response } from 'express';
import { CreateDailyUseCase } from './CreateDailyUseCase';
import { UpdateDailyUseCase } from './UpdateDailyUseCase';

export class DailyController {
  constructor(
    private createDailyUseCase: CreateDailyUseCase,
    private updateDailyUseCase: UpdateDailyUseCase
  ) {}

  async create(request: Request, response: Response): Promise<Response> {
    const { type, value, date, description, employee } = request.body;

    try {
      const _daily = await this.createDailyUseCase.execute({
        type,
        value,
        date,
        description,
        employee,
      });

      return response.json(_daily);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id, type, value, date, description, employee } = request.body;

    try {
      const _daily = await this.updateDailyUseCase.execute({
        id,
        type,
        value,
        date,
        description,
      });

      return response.json(_daily);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}
