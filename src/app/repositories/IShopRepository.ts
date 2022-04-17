import { EntityRepository, Repository } from 'typeorm';
import { Shop } from '../entities/Shop';

export interface IShopRepository {
  save(shop: Shop): Promise<Shop>;
  get(): Promise<Shop[]>;
  getByName(name: string): Promise<Shop>;
}
