import { ShopRepository } from '../../repositories/implementations/ShopRepository';
import { CreateShopController } from './CreateShopController';
import { CreateShopUseCase } from './CreateShopUseCase';

const shopRepository = new ShopRepository();
const createShopUseCase = new CreateShopUseCase(shopRepository);

const createShopController = new CreateShopController(createShopUseCase);

export { createShopUseCase, createShopController };
