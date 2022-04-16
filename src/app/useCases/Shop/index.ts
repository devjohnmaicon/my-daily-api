import { ShopRepository } from '../../repositories/implementations/ShopRepository';
import { CreateShopUseCase } from './CreateShopUseCase';
import { ShopController } from './ShopController';

const shopRepository = new ShopRepository();
const createShopUseCase = new CreateShopUseCase(shopRepository);

const shopController = new ShopController(createShopUseCase);

export { createShopUseCase, shopController };
