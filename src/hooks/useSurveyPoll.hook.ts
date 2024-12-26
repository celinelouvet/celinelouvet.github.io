import { useEffect, useState } from "react";

import { useSurveyInfos } from "./useSurveyInfos.hook";
import { type SurveyPoll, SurveyState } from "../models";

export const useSurveyPoll = (
  talkSubjectId?: string | string[],
  conventionId?: string | string[]
) => {
  const [surveyId, setSurveyId] = useState<string | null>(null);
  const [surveyPoll, setSurveyPoll] = useState<SurveyPoll | null>(null);
  const [surveyState, setSurveyState] = useState<SurveyState>(
    SurveyState.Unknown
  );
  const [states, setStates] = useState(new Map<string, boolean>());
  const [values, setValues] = useState(new Map<string, boolean | string>());

  const surveyInfos = useSurveyInfos(talkSubjectId, conventionId);

  useEffect(() => {
    setSurveyState(surveyInfos.state);

    setSurveyId(surveyInfos.surveyId);
    setSurveyPoll(surveyInfos.surveyPoll);

    if (surveyInfos.surveyId === null || surveyInfos.surveyPoll === null) {
      return;
    }

    setStates(
      new Map<string, boolean>(
        [...surveyInfos.surveyPoll.questions.entries()].map(
          ([key, { initialState }]) => [key, initialState]
        )
      )
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
