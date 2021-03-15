import { Router } from 'express';
import request from 'request';

const routes = Router();

routes.get('/', async (req, res) => {
  request({
    method: 'POST',
    url: 'http://localhost:3333/pdf/create',
    json: {
      user_id: 1,
      template: 'users-report',
    },
  }).pipe(res);
});

export default routes;
