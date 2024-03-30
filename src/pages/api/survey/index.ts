import type { NextApiRequest, NextApiResponse } from 'next';

import { createSurveyResult } from '@/api';
import { type SurveyResult, asSurveyResult } from '@/models';

const ACCEPTED_METHODS = ['POST'];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | SurveyResult[] | { error: unknown }>
) {
  if (!ACCEPTED_METHODS.includes(req.method ?? '')) {
    return res.status(400).json({ error: 'Bad request' });
  }

  try {
    const body = asSurveyResult(req.body);
    await createSurveyResult(body);

    return res.status(200).send();
  } catch (error) {
    return res.status(400).json({ error: 'Bad request' });
  }
}
