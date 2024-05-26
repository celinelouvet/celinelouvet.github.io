import type { NextApiRequest, NextApiResponse } from 'next';

import { listSurveyResultsBySurveyId } from '@/api';
import { type SurveyResult, asQueryListBySurveyId } from '@/models';

const ACCEPTED_METHODS = ['GET'];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | SurveyResult[] | { error: unknown }>
) {
  console.log(`${req.method} /api/survey/[surveyId]`);

  if (!ACCEPTED_METHODS.includes(req.method ?? '')) {
    return res.status(400).json({ error: 'Bad request' });
  }

  try {
    const results = await getSurveyResults(req);
    return res.status(200).json(results);
  } catch (error) {
    return res.status(400).json({ error: 'Bad request' });
  }
}

const getSurveyResults = async (req: NextApiRequest) => {
  const { surveyId } = asQueryListBySurveyId(req.query);

  return listSurveyResultsBySurveyId(surveyId);
};
