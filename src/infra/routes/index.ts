import { Router } from 'express';
import routesDaily from './daily.routes';
import routesEmployee from './employee.routes';
import routesPhoto from './photo.routes';
import routesShop from './shop.routes';

const routes = Router();

routes.use(routesDaily);
routes.use(routesEmployee);
routes.use(routesShop);
routes.use(routesShop);

routes.use(routesPhoto);

export default routes;
