import { getRepository } from 'typeorm';
import { Shop } from '../../entities/Shop';
import { IShopRepository } from '../IShopRepository';

export class ShopRepository implements IShopRepository {
  async getByName(name: string): Promise<Shop> {
    const repo = getRepository(Shop);

    return repo.findOne({ name });
  }

  async get(): Promise<Shop[]> {
    const repo = getRepository(Shop);

    return repo.find({ relations: ['role', 'employees'] });
  }

  async save(shop: Shop): Promise<Shop> {
    const repo = getRepository(Shop);

    return await repo.save(shop);
  }
}
