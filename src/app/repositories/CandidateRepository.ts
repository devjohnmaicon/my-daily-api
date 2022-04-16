import { EntityRepository, Repository } from 'typeorm';
import { Shop } from '../entities/Shop';

@EntityRepository(Shop)
export class ShopRepository extends Repository<Shop> {

  public async findByEmail(email: string): Promise<Shop | null> {
    const findEmail = await this.findOne({

      where: { email },
    });

    return findEmail || null;
  }

  public async findById(id_candidate: string): Promise<Shop | null> {
    const findId = await this.findOne({
      where: { id_candidate },
    });

    return findId || null;
  }
}

