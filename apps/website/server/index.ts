/* eslint-disable import-x/no-named-as-default-member */

import cors from 'cors';
import express, { type Express, type Request, type Response } from 'express';
import morgan from 'morgan';

export const createServer = (): Express => {
  const app = express();

  app.disable('x-powered-by');
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());

  app.get('/test', (_req: Request, res: Response) => {
    res.send('Website started');
  });

  return app;
};

const port = process.env.PORT ?? 5001;
const server = createServer();

server.listen(port, () => {
  console.log(`Website is served on ${port}`);
});
