import { useState } from 'react';

import { type SurveyPollQuestion } from '@/models';

export const useSurvey = (survey: Map<string, SurveyPollQuestion>) => {
  const [states, setStates] = useState(
    new Map<string, boolean>(
      [...survey.entries()].map(([key, { initialState }]) => [
        key,
        initialState,
      ])
    )
  );
  const [values, setValues] = useState(new Map<string, boolean | string>());

  const setState = (key: string, value: boolean) =>
    setStates(new Map(states.set(key, value)));

  const setValue = (key: string, value: boolean | string) =>
    setValues(new Map(values.set(key, value)));

  return { states, values, setState, setValue };
};
