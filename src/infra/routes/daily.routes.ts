import { Router } from 'express';

import { dailyController } from '../../app/useCases/Daily';

const routesDaily = Router();

routesDaily.post('/dailyCreate', (req, res) =>
  dailyController.create(req, res)
);

routesDaily.put('/daily', (req, res) => dailyController.update(req, res));

routesDaily.delete('/daily', (req, res) => dailyController.delete(req, res));

routesDaily.post('/daily', (req, res) => dailyController.findOne(req, res));

export default routesDaily;
