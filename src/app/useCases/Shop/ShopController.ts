import { Request, Response } from 'express';
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
      await this.createShopUseCase.execute({
        name,
        phone,
        city,
        profile_photo,
      });

      return response.status(200).json({ message: 'Success' });
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
