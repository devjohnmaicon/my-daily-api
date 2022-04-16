import { Router } from 'express';
import { createShopController } from '../app/useCases/createShop';

const routes = Router();

routes.post('/', (req, res) => {
  return createShopController.handle(req, res);
});

export default routes;
