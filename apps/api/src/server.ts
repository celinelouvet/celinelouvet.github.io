import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import express, { type Express } from 'express';
import morgan from 'morgan';

export const createServer = (): Express => {
  const app = express();

  app.disable('x-powered-by');
  app.use(morgan('dev'));
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cors());

  app.get('/message/:name', (req, res) => {
    return res.json({ message: `hello ${req.params.name}` });
  });
  app.get('/status', (_, res) => {
    return res.json({ ok: true });
  });

  return app;
};
