import { Router } from 'express';

import { employeeController } from '../../app/useCases/Employee';

const routesEmployee = Router();

routesEmployee.post('/employeeCreate', (req, res) =>
  employeeController.create(req, res)
);

routesEmployee.post('/employee', (req, res) =>
  employeeController.getByEmail(req, res)
);

export default routesEmployee;
