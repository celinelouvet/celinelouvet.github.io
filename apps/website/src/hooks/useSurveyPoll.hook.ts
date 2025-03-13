import { type SurveyPoll, SurveyState } from '@repo/models';
import * as React from 'react';

import { useSurveyInfos } from './useSurveyInfos.hook';

export const useSurveyPoll = (
  talkSubjectId?: string | string[],
  conventionId?: string | string[],
) => {
  const [surveyId, setSurveyId] = React.useState<string | null>(null);
  const [surveyPoll, setSurveyPoll] = React.useState<SurveyPoll | null>(null);
  const [surveyState, setSurveyState] = React.useState<SurveyState>(
    SurveyState.Unknown,
  );
  const [states, setStates] = React.useState(new Map<string, boolean>());
  const [values, setValues] = React.useState(
    new Map<string, boolean | string>(),
  );

  const surveyInfos = useSurveyInfos(talkSubjectId, conventionId);

  React.useEffect(() => {
    setSurveyState(surveyInfos.state);

    setSurveyId(surveyInfos.surveyId);
    setSurveyPoll(surveyInfos.surveyPoll);

    if (surveyInfos.surveyId === null || surveyInfos.surveyPoll === null) {
      return;
    }

    setStates(
      new Map<string, boolean>(
        [...surveyInfos.surveyPoll.questions.entries()].map(
          ([key, { initialState }]) => [key, initialState],
        ),
      ),
    );
  }, [
    surveyInfos.state,
    surveyInfos.surveyId,
    surveyInfos.surveyPoll,
    setStates,
    setSurveyId,
    setSurveyPoll,
    setSurveyState,
  ]);

  const setState = (key: string, value: boolean) =>
    setStates(new Map(states.set(key, value)));

  const setValue = (key: string, value: boolean | string) =>
    setValues(new Map(values.set(key, value)));

  return {
    surveyId,
    surveyPoll,
    surveyState,
    states,
    values,
    setState,
    setValue,
  };
};
