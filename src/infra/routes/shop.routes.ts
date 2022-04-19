import { Router } from 'express';

import { shopController } from '../../app/useCases/Shop';

const routesShop = Router();

routesShop.post('/shopCreate', (req, res) => shopController.create(req, res));

routesShop.get('/shop', (req, res) => shopController.getShop(req, res));

export default routesShop;
