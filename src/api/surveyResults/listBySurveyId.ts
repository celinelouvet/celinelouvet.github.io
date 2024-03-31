import { Datastore } from '@google-cloud/datastore';

import { asSurveyResults } from '@/models';

import { KIND } from './kind';

export const listBySurveyId = async (surveyId: string) => {
  try {
    const datastore = new Datastore();

    const query = datastore
      .createQuery(KIND)
      .filter('version', process.env.VERSION_NAME)
      .filter('surveyId', surveyId);

    const [surveyResults] = await datastore.runQuery(query);

    return asSurveyResults(surveyResults);
  } catch (error) {
    return [];
  }
};
