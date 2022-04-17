import { Request, Response } from 'express';
import { GetEmployeesUseCase } from '../Employee/GetEmployeesUseCase';
import { CreateShopUseCase } from './CreateShopUseCase';
import { GetShopUseCase } from './GetShopUseCase';

export class ShopController {
  constructor(
    private createShopUseCase: CreateShopUseCase,
    private getShopUseCase: GetShopUseCase
  ) {}

  async create(request: Request, response: Response): Promise<Response> {
    const { name, phone, city, profile_photo } = request.body;

    try {
      const candidate = await this.createShopUseCase.execute({
        name,
        phone,
        city,
        profile_photo,
      });

      return response.json(candidate);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }

  async getShop(request: Request, response: Response): Promise<Response> {
    try {
      const employees = await this.getShopUseCase.execute();

      return response.json(employees);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}
