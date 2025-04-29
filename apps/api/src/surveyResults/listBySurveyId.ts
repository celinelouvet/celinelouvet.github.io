import { Datastore, PropertyFilter, and } from '@google-cloud/datastore';
import { asQueryListBySurveyId, asSurveyResults } from '@repo/models';

import type { APIHandler } from '../type';

const KIND = 'SurveyResults';

const listBySurveyId = async (surveyId: string) => {
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

export const listSurveyResultsBySurveyId: APIHandler = async (req, res) => {
  try {
    const { surveyId } = asQueryListBySurveyId(req.params);
    console.log(`[${KIND}] Listing survey results for surveyId "${surveyId}"`);

    const results = await listBySurveyId(surveyId);

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
