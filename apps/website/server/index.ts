import path from 'node:path';

import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import express, { type Express, type Request, type Response } from 'express';
import morgan from 'morgan';

export const createServer = (): Express => {
  const app = express();

  app.disable('x-powered-by');
  app.use(morgan('dev'));
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cors());

  app.get('/test', (_req: Request, res: Response) => {
    res.send('Website started');
  });

  // eslint-disable-next-line import-x/no-named-as-default-member
  app.use(express.static(path.join(__dirname, 'app')));

  return app;
};

const port = process.env.PORT ?? 5001;
const server = createServer();

server.listen(port, () => {
  console.log(`Website is served on ${port}`);
});
