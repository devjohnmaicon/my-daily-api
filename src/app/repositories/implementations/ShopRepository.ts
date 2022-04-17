import { getRepository } from 'typeorm';
import { Shop } from '../../entities/Shop';
import { IShopRepository } from '../IShopRepository';

export class ShopRepository implements IShopRepository {
  async getByName(name: string): Promise<Shop> {
    const repo = getRepository(Shop);

    const shop = await repo.findOne({ name });

    return shop;
  }

  async get(): Promise<Shop[]> {
    const repo = getRepository(Shop);

    const shop = await repo.find({relations: ['employees']});

    return shop;
  }

  async save(shop: Shop): Promise<Shop> {
    const repo = getRepository(Shop);

    const newShop = await repo.save(shop);

    return newShop;
  }
}
