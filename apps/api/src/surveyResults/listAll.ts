import { Datastore } from '@google-cloud/datastore';
import { asSurveyResults } from '@repo/models';

import type { APIHandler } from '../type';

const KIND = 'SurveyResults';

const listAll = async () => {
  console.log(`[${KIND}] Listing all survey results`);
  try {
    const datastore = new Datastore();

    const query = datastore
      .createQuery(KIND)
      .filter('version', process.env.VERSION_NAME);

    const [data] = await datastore.runQuery(query);
    const results = asSurveyResults(data);

    console.log(`[${KIND}] Found ${results.length} survey results`);

    return results;
  } catch (error) {
    console.error(`[${KIND}] Error listing all survey results`, { error });
    return [];
  }
};

export const listAllSurveyResults: APIHandler = async (req, res) => {
  try {
    const results = await listAll();

    res.status(200).json(results);
    return;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    res.sendStatus(500);
    return;
  }
};
