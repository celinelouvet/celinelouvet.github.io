import { Datastore, PropertyFilter, and } from '@google-cloud/datastore';

import type { APIHandler } from '../type';

const KIND = 'SurveyResults';

type UpdateInput = { oldSurveyId: string; newSurveyId: string };
type RawSurveyResult = {
  id: string;
  surveyId: string;
  title: string;
  values: Record<string, unknown>;
  timestamp: string;
  version: string;
};

const update = async ({ oldSurveyId, newSurveyId }: UpdateInput) => {
  console.log(
    `[${KIND}] Updating surveyId from "${oldSurveyId}" to "${newSurveyId}"`,
  );

  try {
    const datastore = new Datastore();

    const query = datastore
      .createQuery(KIND)
      .filter(
        and([
          new PropertyFilter('version', '=', process.env.VERSION_NAME),
          new PropertyFilter('surveyId', '=', oldSurveyId),
        ]),
      );

    const [data] = await datastore.runQuery(query);

    console.log(
      `[${KIND}] Found ${data.length} results for surveyId "${oldSurveyId}"`,
    );

    const updatedData = data.map((result: RawSurveyResult) => {
      const key = datastore.key([KIND, result.id]);
      return {
        key,
        data: {
          ...result,
          surveyId: newSurveyId, // Update the surveyId
        },
      };
    });
    await datastore.save(updatedData);

    console.log(
      `[${KIND}] Updated surveyId from "${oldSurveyId}" to "${newSurveyId}"`,
    );
  } catch (error) {
    console.error(
      `[${KIND}] Error updating surveyId from "${oldSurveyId}" to "${newSurveyId}"`,
      { error },
    );
    throw new Error('Error updating surveyId');
  }
};

export const updateSurveyId: APIHandler = async (req, res) => {
  try {
    if (
      req.body === undefined ||
      req.body === null ||
      typeof req.body !== 'object' ||
      !('oldSurveyId' in req.body) ||
      !('newSurveyId' in req.body)
    ) {
      res.sendStatus(400);
      return;
    }

    const body = req.body as UpdateInput;

    await update(body);

    res.sendStatus(200);
    return;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    res.sendStatus(500);
    return;
  }
};
