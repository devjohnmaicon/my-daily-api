import { getCustomRepository } from 'typeorm';
import { Shop } from '../../entities/Shop';
import { ShopRepository } from '../../repositories/CandidateRepository';


interface Request {
  name: string;
  phone: string;
  city: string;
  profile_photo: string;
}

export class CreateShopService {
  public async execute({
    name,
    phone,
    city,
    profile_photo
  }: Request): Promise<Shop> {

    const shopRepository = getCustomRepository(ShopRepository);

    const shop = shopRepository.create({
      name,
      phone,
      city,
      profile_photo
    });

    await shopRepository.save(shop);

    return shop;
  }
}

