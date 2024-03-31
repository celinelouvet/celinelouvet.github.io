import type { NextApiRequest, NextApiResponse } from 'next';

import { createLog } from '@/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | { error: unknown }>
) {
  if (req.method !== 'POST') {
    return res.status(400).json({ error: 'Bad request' });
  }

  try {
    await createLog(req);

    return res.status(200).send();
  } catch (error) {
    return res.status(400).json({ error: 'Bad request' });
  }
}
