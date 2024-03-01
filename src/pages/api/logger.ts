import { LoggingWinston } from '@google-cloud/logging-winston';
import type { NextApiRequest, NextApiResponse } from 'next';
import winston from 'winston';
import { z } from 'zod';

const loggingWinston = new LoggingWinston();

const logger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console(), loggingWinston],
});

logger.info('Logger API is running');

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | { error: unknown }>
) {
  if (req.method !== 'POST') {
    return res.status(400).json({ error: 'Bad request' });
  }

  const body = loggerSchema.safeParse(req.body);
  if (!body.success) {
    return res.status(400).json({ error: body.error });
  }

  const { message, metadata } = body.data;
  logger.info(message, metadata);

  return res.status(200).send();
}

const loggerSchema = z.object({
  message: z.string(),
  metadata: z.record(z.string()),
});
