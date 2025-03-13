import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import express, { type Express, type Request, type Response } from 'express';
import morgan from 'morgan';

import { createLog } from './logger';

export const createServer = (): Express => {
  const app = express();

  app.disable('x-powered-by');
  app.use(morgan('dev'));
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cors());

  app.get('/test', (_req: Request, res: Response) => {
    res.send('Server started');
  });

  app.post('/logger', createLog);

  return app;
};
