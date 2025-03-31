import path from 'node:path';

import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import express, {
  type Express,
  type Request,
  type Response,
  static as serveStatic,
} from 'express';
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

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'app/index.html'));
    res.setHeader('Cache-Control', 'public, max-age=0');
    return;
  });

  const oneDay = 1000 * 60 * 60 * 24;
  app.use(serveStatic(path.join(__dirname, 'app'), { maxAge: oneDay }));

  return app;
};

const port = process.env.PORT ?? 5001;
const server = createServer();

server.listen(port, () => {
  console.log(`Website is served on ${port}`);
});
