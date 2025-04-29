import { Datastore } from '@google-cloud/datastore';
import { type SurveyResult, asSurveyResult } from '@repo/models';
import { v4 as uuid } from 'uuid';

import type { APIHandler } from '../type';

const KIND = 'SurveyResults';

const create = async ({ surveyId, title, values }: SurveyResult) => {
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

export const createSurveyResult: APIHandler = async (req, res) => {
  try {
    const body = asSurveyResult(req.body);

    await create(body);

    res.sendStatus(201);
    return;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);

      if (error.message === 'Invalid content') {
        res.sendStatus(400);
        return;
      }
    }

    res.sendStatus(500);
    return;
  }
};
