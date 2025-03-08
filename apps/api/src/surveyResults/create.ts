import { Datastore } from '@google-cloud/datastore';
import { type SurveyResult } from '@repo/models';
import { v4 as uuid } from 'uuid';

const KIND = 'SurveyResults';

export const create = async ({ surveyId, title, values }: SurveyResult) => {
  console.log(`[${KIND}] Create result for surveyId "${surveyId}"`);

  try {
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

    console.log(`[${KIND}] Created result for surveyId "${surveyId}"`);
  } catch (error) {
    console.error(
      `[${KIND}] Error creating result for surveyId "${surveyId}"`,
      { error },
    );
    throw new Error('Error creating survey result');
  }
};
