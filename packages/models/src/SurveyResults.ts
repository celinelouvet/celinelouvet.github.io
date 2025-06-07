import { z } from 'zod';

const surveySchema = z.object({
  surveyId: z.string(),
  title: z.string(),
  values: z.record(z.enum(['yes', 'no']).or(z.string())),
});
export type SurveyResult = z.infer<typeof surveySchema>;

export const asSurveyResult = (data: unknown): SurveyResult => {
  const result = surveySchema.safeParse(data);
  if (!result.success) {
    console.log('Invalid content', result.error);
    throw new Error('Invalid content');
  }

  return result.data;
};

export const asSurveyResults = (data: unknown): SurveyResult[] => {
  const result = z.array(surveySchema).safeParse(data);
  if (!result.success) {
    console.log('Invalid content', result.error);
    throw new Error('Invalid content');
  }

  return result.data;
};

const querySchema = z.object({
  surveyId: z.string(),
  purge: z.any().optional(),
});
export type QueryListBySurveyId = z.infer<typeof querySchema>;

export const asQueryListBySurveyId = (data: unknown): QueryListBySurveyId => {
  const result = querySchema.safeParse(data);
  if (!result.success) {
    console.log('Invalid query', result.error);
    throw new Error('Invalid query');
  }

  return result.data;
};
