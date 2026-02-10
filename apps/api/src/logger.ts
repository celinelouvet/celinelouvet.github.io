import { Datastore } from '@google-cloud/datastore';
import { v4 as uuid } from 'uuid';
import { z } from 'zod';

import { type APIHandler } from './type';

const loggerSchema = z.object({
  message: z.string(),
  metadata: z.record(z.string(), z.string().or(z.boolean()).nullable().optional()),
});
type Logger = z.infer<typeof loggerSchema>;

const saveLog = async ({ message, metadata }: Logger) => {
  const datastore = new Datastore();

  const kind = 'Tracking';
  const id = uuid();
  const key = datastore.key([kind, id]);

  const task = {
    key,
    data: {
      ...metadata,
      id,
      message,
      timestamp: new Date().toISOString(),
      version: process.env.VERSION_NAME,
    },
  };

  await datastore.save(task);
};

export const createLog: APIHandler = async (req, res) => {
  try {
    const body = loggerSchema.safeParse(req.body);
    if (!body.success) {
      console.log('Invalid request body', body.error);
      throw new Error('Invalid request body');
    }

    await saveLog(body.data);

    res.sendStatus(201);
    return;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      if (error.message === 'Invalid request body') {
        res.sendStatus(400);
        return;
      }
    }

    res.sendStatus(500);
    return;
  }
};
