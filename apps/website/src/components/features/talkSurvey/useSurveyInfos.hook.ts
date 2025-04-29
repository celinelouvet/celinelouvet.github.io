import {
  type SurveyByConvention,
  type SurveyPoll,
  SurveyState,
} from '@repo/models';

import { type TalkSubject } from '@/data';
import { useResume } from '@/hooks';

const defaultSurveyId = 'default';
const emptySurvey = {
  surveyId: null,
  surveyPoll: null,
  state: SurveyState.InProgress,
};

const getId = (id?: string | string[]): string | null => {
  if (!id) {
    return null;
  }
  if (Array.isArray(id)) {
    return getId(id[0]);
  }

  return id;
};

const getState = (survey?: SurveyByConvention): SurveyState => {
  if (!survey) {
    return SurveyState.Unknown;
  }

  const now = new Date();
  const startDate = new Date(survey.opensAt);
  const endDate = new Date(survey.closesAt);

  if (startDate > now) {
    return SurveyState.NotStarted;
  }

  if (endDate < now) {
    return SurveyState.Completed;
  }

  return SurveyState.InProgress;
};

export const useSurveyInfos = (
  talkSubjectId?: string | string[],
  conventionId?: string | string[],
): {
  surveyId: string | null;
  surveyPoll: SurveyPoll | null;
  state: SurveyState;
} => {
  const { talkSubjects } = useResume();

  const parsedTalkSubjectId = getId(talkSubjectId);
  if (parsedTalkSubjectId === null) {
    return emptySurvey;
  }

  if (!talkSubjects.has(parsedTalkSubjectId)) {
    return emptySurvey;
  }

  const { survey: surveyPoll } = talkSubjects.get(
    parsedTalkSubjectId,
  ) as TalkSubject;

  if (!surveyPoll) {
    return emptySurvey;
  }
  const parsedConventionId = getId(conventionId);
  if (parsedConventionId === null) {
    return {
      surveyId: parsedConventionId,
      surveyPoll,
      state: SurveyState.InProgress,
    };
  }

  const survey = surveyPoll.surveys.find(
    ({ name }) => name === parsedConventionId,
  );

  return {
    surveyId: survey?.name ?? defaultSurveyId,
    surveyPoll,
    state: getState(survey),
  };
};
