import { Router } from 'express';
import { roleController } from '../../app/useCases/Role';

const routesShop = Router();

routesShop.post('/roleCreate', (req, res) => roleController.create(req, res));

export default routesShop;
