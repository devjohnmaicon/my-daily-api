import { Router } from 'express';
import { employeeController } from '../app/useCases/Employee';
import { EmployeeController } from '../app/useCases/Employee/EmployeeController';
import { createShopController } from '../app/useCases/Shop';

const routes = Router();

routes.post('/newShop', (req, res) => {
  return createShopController.handle(req, res);
});

routes.post('/newEmployee', (req, res) => {
  return employeeController.create(req, res);
});

export default routes;
