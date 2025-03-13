import { Datastore, PropertyFilter, and } from '@google-cloud/datastore';
import { asSurveyResults } from '@repo/models';

import { KIND } from './kind';

export const listBySurveyId = async (surveyId: string) => {
  console.log(`[${KIND}] Listing by surveyId "${surveyId}"`);
  try {
    const datastore = new Datastore();

    const query = datastore
      .createQuery(KIND)
      .filter(
        and([
          new PropertyFilter('version', '=', process.env.VERSION_NAME),
          new PropertyFilter('surveyId', '=', surveyId),
        ]),
      );

    const [data] = await datastore.runQuery(query);
    const results = asSurveyResults(data);

    console.log(
      `[${KIND}] Found ${results.length} results for surveyId "${surveyId}"`,
    );

    return results;
  } catch (error) {
    console.error(`[${KIND}] Error listing for surveyId "${surveyId}"`, {
      error,
    });
    return [];
  }
};
