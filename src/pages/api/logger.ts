import { Datastore } from '@google-cloud/datastore';
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';
import { z } from 'zod';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | { error: unknown }>
) {
  if (req.method !== 'POST') {
    return res.status(400).json({ error: 'Bad request' });
  }

  const body = loggerSchema.safeParse(req.body);
  if (!body.success) {
    return res.status(400).json({ error: 'Bad request' });
  }

  await saveLog(body.data);

  return res.status(200).send();
}

const loggerSchema = z.object({
  message: z.string(),
  metadata: z.record(z.string().or(z.boolean()).nullable().optional()),
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
