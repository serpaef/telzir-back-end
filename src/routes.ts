import { Router } from 'express';
import PhonePlansController from './controllers/PhonePlansController';

const routes = Router();

routes.get('/ping', (_req, res) => {
  res.status(200).send({message: 'pong'});
})
routes.get('/plans', PhonePlansController.getAll);

export default routes;
