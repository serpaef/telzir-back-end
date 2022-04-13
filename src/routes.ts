import { Router } from 'express';

const routes = Router();

routes.get('/ping', (_req, res) => {
  res.status(200).send({message: 'pong'});
})

export default routes;
