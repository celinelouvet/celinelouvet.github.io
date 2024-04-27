import { type SurveyByConvention } from '@/models';

const getTalkSubjectId = (talkSubjectId?: string | string[]): string | null => {
  if (!talkSubjectId) {
    return null;
  }
  if (Array.isArray(talkSubjectId)) {
    return talkSubjectId[0] ?? null;
  }

  return talkSubjectId;
};

const isOpen = (survey?: SurveyByConvention): boolean => {
  if (!survey) {
    return true;
  }
  const now = new Date();
  const startDate = new Date(survey.opensAt);
  const endDate = new Date(survey.closesAt);
  return startDate <= now && now <= endDate;
};

export const useSurveyInfos = (
  surveyIds: Record<string, SurveyByConvention>,
  talkSubjectId?: string | string[]
): { surveyId: string; isOpen: boolean } => {
  const defaultSurveyId = 'default';
  const defaultSurveyInfos = { surveyId: defaultSurveyId, isOpen: true };

  const id = getTalkSubjectId(talkSubjectId);

  if (id === null) {
    return defaultSurveyInfos;
  }

  const survey = surveyIds[id];

  return { surveyId: survey?.name ?? defaultSurveyId, isOpen: isOpen(survey) };
};
