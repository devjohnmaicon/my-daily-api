import { Shop } from '../../entities/Shop';
import { IShopRepository } from '../../repositories/IShopRepository';
import { CreateShopPropsDTO } from './ShopDTO';

export class CreateShopUseCase {
  constructor(private shopRepository: IShopRepository) {}

  public async execute({
    name,
    phone,
    city,
    profile_photo,
  }: CreateShopPropsDTO): Promise<Shop | Error> {
    const hasShops = await this.shopRepository.getByName(name);

    if (hasShops) {
      throw new Error('Loja já Existe');
    }

    const shop = new Shop({
      name,
      phone,
      city,
      profile_photo,
    });

    return await this.shopRepository.save(shop);
  }
}
