import { EntityRepository, Repository } from 'typeorm';
import { Shop } from '../entities/Shop';

export interface IShopRepository {
  findByName(name: string): Promise<Shop | undefined>;
  save(shop: Shop): Promise<Shop>;
}
