import { Datastore } from '@google-cloud/datastore';

import { asSurveyResults } from '@/models';

import { KIND } from './kind';

export const listAll = async () => {
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
