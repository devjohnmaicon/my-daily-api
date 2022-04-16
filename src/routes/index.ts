import { Router } from 'express';
import { dailyController } from '../app/useCases/Daily';
import { employeeController } from '../app/useCases/Employee';
import { createShopController } from '../app/useCases/Shop';

const routes = Router();

routes.post('/newShop', (req, res) => {
  return createShopController.handle(req, res);
});

routes.post('/newEmployee', (req, res) => {
  return employeeController.create(req, res);
});

routes.post('/newDaily', (req, res) => {
  return dailyController.create(req, res);
});

export default routes;
