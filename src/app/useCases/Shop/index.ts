import { ShopRepository } from '../../repositories/implementations/ShopRepository';
import { CreateShopUseCase } from './CreateShopUseCase';
import { GetShopUseCase } from './GetShopUseCase';
import { ShopController } from './ShopController';

const shopRepository = new ShopRepository();

const createShopUseCase = new CreateShopUseCase(shopRepository);
const getShopUseCase = new GetShopUseCase(shopRepository);

const shopController = new ShopController(createShopUseCase, getShopUseCase);

export { shopController, createShopUseCase };
