import { Request, Response } from 'express';
import { CreateShopUseCase } from './CreateShopUseCase';

export class ShopController {
  constructor(private createShopUseCase: CreateShopUseCase) {}

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
}