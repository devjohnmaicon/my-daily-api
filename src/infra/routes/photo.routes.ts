import { Router } from 'express';
import { roleController } from '../../app/useCases/Role';

const routesPhoto = Router();

routesPhoto.post('/photo', (req, res) => roleController.create(req, res));

export default routesPhoto;
