import { Router } from 'express';
import PhonePlansController from './controllers/PhonePlansController';
import RatesController from './controllers/RatesController';

const routes = Router();

routes.get('/ping', (_req, res) => {
  res.status(200).send({message: 'pong'});
})
routes.get('/plans', PhonePlansController.getAll);
routes.get('/rates', RatesController.getAll);

export default routes;
