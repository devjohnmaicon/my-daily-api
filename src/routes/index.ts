import { Router } from 'express';
import { dailyController } from '../app/useCases/Daily';
import { employeeController } from '../app/useCases/Employee';
import { roleController } from '../app/useCases/Role';
import { shopController } from '../app/useCases/Shop';

const routes = Router();

routes.post('/newShop', (req, res) => {
  return shopController.create(req, res);
});

routes.post('/newEmployee', (req, res) => {
  return employeeController.create(req, res);
});

routes.post('/newDaily', (req, res) => {
  return dailyController.create(req, res);
});

routes.post('/newRole', (req, res) => {
  return roleController.create(req, res);
});

export default routes;
