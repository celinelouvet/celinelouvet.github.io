import { Datastore } from '@google-cloud/datastore';
import { v4 as uuid } from 'uuid';

import { type SurveyResult } from '@/models';

const KIND = 'SurveyResults';

export const create = async ({ surveyId, title, values }: SurveyResult) => {
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
