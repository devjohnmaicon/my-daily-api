import { Router } from 'express';
import { dailyController } from '../app/useCases/Daily';
import { employeeController } from '../app/useCases/Employee';
import { roleController } from '../app/useCases/Role';
import { shopController } from '../app/useCases/Shop';

const routes = Router();

routes.post('/shopCreate', (req, res) => {
  return shopController.create(req, res);
});

routes.get('/shop', (req, res) => {
  return shopController.getShop(req, res);
});

routes.post('/employeeCreate', (req, res) => {
  return employeeController.create(req, res);
});

routes.get('/employee', (req, res) => {
  return employeeController.index(req, res);
});

routes.post('/dailyCreate', (req, res) => {
  return dailyController.create(req, res);
});

routes.post('/roleCreate', (req, res) => {
  return roleController.create(req, res);
});

export default routes;
