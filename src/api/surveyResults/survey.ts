import { Datastore } from '@google-cloud/datastore';
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';
import { z } from 'zod';

const ACCEPTED_METHODS = ['POST', 'GET'];
const KIND = 'SurveyResults';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | Survey[] | { error: unknown }>
) {
  if (!ACCEPTED_METHODS.includes(req.method ?? '')) {
    return res.status(400).json({ error: 'Bad request' });
  }

  if (req.method === 'POST') {
    try {
      await createSurveyResults(req);

      return res.status(200).send();
    } catch (error) {
      return res.status(400).json({ error: 'Bad request' });
    }
  }

  const results = await getSurveyResults(req);
  return res.status(200).json(results);
}

const createSurveyResults = async (req: NextApiRequest) => {
  const body = surveySchema.safeParse(req.body);
  if (!body.success) {
    console.log('Invalid request body', body.error);
    throw new Error('Invalid request body');
  }

  await saveResults(body.data);
  await listSurveyResults(body.data.surveyId);
};

const getSurveyResults = async (req: NextApiRequest) => {
  const { surveyId, purge } = req.query;

  if (purge) {
    await purgeAll();
  }

  if (!surveyId) {
    console.log('Missing surveyId');
    throw new Error('Missing surveyId');
  }
  if (surveyId && Array.isArray(surveyId)) {
    console.log('surveyId can’t be an array');
    throw new Error('surveyId can’t be an array');
  }

  return listSurveyResults(surveyId);
};

const valueSchema = z.string().or(z.boolean()).nullable().optional();
const surveySchema = z.object({
  surveyId: z.string(),
  title: z.string(),
  values: z.record(valueSchema),
});
type Survey = z.infer<typeof surveySchema>;

const saveResults = async ({ surveyId, title, values }: Survey) => {
  const datastore = new Datastore();

  const id = uuid();
  const key = datastore.key([KIND, id]);

  const surveyResult = {
    key,
    data: {
      id,
      surveyId,
      title,
      values,
      timestamp: new Date().toISOString(),
      version: process.env.VERSION_NAME,
    },
  };

  await datastore.save(surveyResult);
};

const listSurveyResults = async (surveyId: string) => {
  try {
    const datastore = new Datastore();

    const query = datastore
      .createQuery(KIND)
      .filter('version', process.env.VERSION_NAME)
      .filter('surveyId', surveyId);

    const [surveyResults] = await datastore.runQuery(query);
    console.log('surveyResults', surveyResults);

    return z.array(surveySchema).parse(surveyResults);
  } catch (error) {
    return [];
  }
};

const purgeAll = async () => {
  console.log('Purging all survey results');

  const datastore = new Datastore();

  const query = datastore
    .createQuery(KIND)
    .filter('version', process.env.VERSION_NAME);

  const [surveyResults] = await datastore.runQuery(query);

  return datastore.delete(surveyResults.map((result) => result[datastore.KEY]));
};
