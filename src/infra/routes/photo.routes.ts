import { Router } from 'express';
import PhotoController from '../../app/useCases/Photo/PhotoController';

const routesPhoto = Router();

routesPhoto.post('/photo', (req, res) => PhotoController.create(req, res));

export default routesPhoto;
