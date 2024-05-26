import type { NextApiRequest, NextApiResponse } from 'next';

import { createSurveyResult, listAllSurveyResults } from '@/api';
import { type SurveyResult, asSurveyResult } from '@/models';

const ACCEPTED_METHODS = ['POST', 'GET'];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | SurveyResult[] | { error: unknown }>
) {
  console.log(`${req.method} /api/survey`);

  if (!ACCEPTED_METHODS.includes(req.method ?? '')) {
    return res.status(400).json({ error: 'Bad request' });
  }

  try {
    if (req.method === 'POST') {
      const body = asSurveyResult(req.body);
      await createSurveyResult(body);
      return res.status(200).send();
    }

    const results = await listAllSurveyResults();
    return res.status(200).json(results);
  } catch (error) {
    return res.status(400).json({ error: 'Bad request' });
  }
}
