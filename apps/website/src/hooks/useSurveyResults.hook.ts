import {
  type SurveyPoll,
  type SurveyPollChoiceQuestion,
  type SurveyResult,
  asSurveyResults,
} from '@repo/models';
import * as React from 'react';

import { useSurveyInfos } from 'src/components/features/talkSurvey/useSurveyInfos.hook';
import { useApi } from 'src/hooks';

type ChoiceValue = 'yes' | 'no';
type ReducedResults = Record<string, Record<ChoiceValue, number>>;
type QuestionToShow = {
  id: string;
  question: SurveyPollChoiceQuestion;
};

export const filterQuestionsToShow = (
  questions: SurveyPoll['questions'],
): QuestionToShow[] =>
  [...questions.entries()]
    .filter(([, question]) => question.type === 'choice')
    .map(([id, question]) => ({
      id,
      question: question as SurveyPollChoiceQuestion,
    }));

const initiateResults = (questionsToShow: QuestionToShow[]) =>
  questionsToShow.reduce((acc: ReducedResults, { id }) => {
    acc[id] = { no: 0, yes: 0 };

    return acc;
  }, {} as ReducedResults);

const reduceResults = (
  results: SurveyResult[],
  questionsToShow: QuestionToShow[],
): ReducedResults => {
  const initialResults = initiateResults(questionsToShow);

  return results.reduce((acc: ReducedResults, result: SurveyResult) => {
    Object.entries(result.values).forEach(([id, value]) => {
      if (value === 'yes' || value === 'no') {
        const accQuestion = acc[id];
        const result = accQuestion[value];
        accQuestion[value] = result + 1;
      }
    });
    return acc;
  }, initialResults);
};

export const useSurveyResults = (
  talkSubjectId?: string | string[],
  conventionId?: string | string[],
) => {
  const [surveyPoll, setSurveyPoll] = React.useState<SurveyPoll | null>(null);
  const [results, setResults] = React.useState<ReducedResults>({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const { get } = useApi();

  const surveyInfos = useSurveyInfos(talkSubjectId, conventionId);

  const refreshQuery = React.useCallback(() => {
    setLoading(true);
    setError(false);

    if (surveyInfos.surveyPoll === null) {
      return;
    }

    const questionsToShow = filterQuestionsToShow(
      surveyInfos.surveyPoll.questions,
    );

    const path =
      surveyInfos.surveyId !== null
        ? `/survey/${surveyInfos.surveyId}`
        : '/survey';

    get(path)
      .then((res) => res.json())
      .then((data) => {
        const allSurveyResults = asSurveyResults(data);
        const results = reduceResults(allSurveyResults, questionsToShow);
        setResults(results);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [get, surveyInfos.surveyId, surveyInfos.surveyPoll, setLoading]);

  React.useEffect(() => {
    if (!loading) return;

    setSurveyPoll(surveyInfos.surveyPoll);
    refreshQuery();
  }, [
    get,
    setSurveyPoll,
    setError,
    loading,
    surveyInfos.surveyId,
    surveyInfos.surveyPoll,
    refreshQuery,
  ]);

  return { surveyPoll, results, loading, error };
};
