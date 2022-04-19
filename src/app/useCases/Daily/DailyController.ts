import { Request, Response } from 'express';
import { CreateDailyUseCase } from './CreateDailyUseCase';
import { DeleteDailyUseCase } from './DeleteDailyUseCase';
import { GetDailyUseCase } from './GetDailyUseCase';
import { UpdateDailyUseCase } from './UpdateDailyUseCase';

export class DailyController {
  constructor(
    private createDailyUseCase: CreateDailyUseCase,
    private updateDailyUseCase: UpdateDailyUseCase,
    private deleteDailyUseCase: DeleteDailyUseCase,
    private getDailyUseCase: GetDailyUseCase
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

  async findOne(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    try {
      const _daily = await this.getDailyUseCase.execute(id);

      return response.json(_daily);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id, type, value, date, description } = request.body;

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

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    try {
      await this.deleteDailyUseCase.execute(id);

      return response.json({ daily_id: id, message: 'Daily  deletada' });
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}
