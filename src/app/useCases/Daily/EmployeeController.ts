import { Request, Response } from 'express';
import { CreateDailyUseCase } from './CreateDailyUseCase';

export class DailyController {
  constructor(private createDailyUseCase: CreateDailyUseCase) {}

  async create(request: Request, response: Response): Promise<Response> {
    const { type, value, date, description } = request.body;

    try {
      const employee = await this.createDailyUseCase.execute({
        type,
        value,
        date,
        description,
      });

      return response.json(employee);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}

