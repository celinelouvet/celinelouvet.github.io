import { type SurveyPoll, SurveyState } from '@repo/models';
import * as React from 'react';

import { useSurveyInfos } from './useSurveyInfos.hook';

export function useSurveyPoll(
  talkSubjectId?: string | string[],
  conventionId?: string | string[],
) {
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

  function setState(key: string, value: boolean) {
    return setStates(new Map(states.set(key, value)));
  }

  function setValue(key: string, value: boolean | string, wasModified = false) {
    const newValues = new Map(values);
    newValues.set(key, value);

    if (wasModified) {
      const currentQuestion = surveyPoll?.questions.get(key);
      if (currentQuestion?.type === 'choice') {
        const previousChoiceValue = value ? 'no' : 'yes';
        const previousChoice = currentQuestion.choices.find(
          (choice) => choice.value === previousChoiceValue,
        );

        if (previousChoice) {
          newValues.delete(previousChoice.next);
        }
      }
    }
    setValues(newValues);
  }

  return {
    surveyId,
    surveyPoll,
    surveyState,
    states,
    values,
    setState,
    setValue,
  };
}
