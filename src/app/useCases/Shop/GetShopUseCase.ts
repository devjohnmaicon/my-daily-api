import { Shop } from '../../entities/Shop';
import { IShopRepository } from '../../repositories/IShopRepository';

export class GetShopUseCase {
  constructor(private shopRepository: IShopRepository) {}

  public async execute(): Promise<Shop[]> {
    const shop = await this.shopRepository.get();

    return shop;
  }
}
