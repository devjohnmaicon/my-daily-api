import { getRepository } from 'typeorm';
import { Shop } from '../../entities/Shop';
import { IShopRepository } from '../IShopRepository';

export class ShopRepository implements IShopRepository {
  async findByName(name: string): Promise<Shop | undefined> {
    const repo = getRepository(Shop);

    const user = await repo.findOne({ name });

    return user;
  }

  async save(shop: Shop): Promise<Shop> {
    const repo = getRepository(Shop);

    const newShop = await repo.save(shop);

    return newShop;
  }
}
