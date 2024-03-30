import { useEffect, useState } from 'react';

import { useApi } from '@/hooks';
import {
  type SurveyPoll,
  type SurveyPollChoiceQuestion,
  type SurveyPollQuestion,
  type SurveyResult,
  asSurveyResults,
} from '@/models';

type ReducedResults = Record<string, Record<string, number>>;

export const useSurveyResults = ({ surveyId, questions }: SurveyPoll) => {
  const [results, setResults] = useState<ReducedResults>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { get } = useApi();

  useEffect(() => {
    if (!loading) return;

    get(`/survey/${surveyId}`)
      .then((res) => res.json())
      .then((data) => {
        const allSurveyResults = asSurveyResults(data);
        const results = reduceResults(allSurveyResults, questions);
        setResults(results);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [get, surveyId, questions, loading]);

  return { results, loading, error };
};

const reduceResults = (
  results: SurveyResult[],
  questions: Map<string, SurveyPollQuestion>
) => {
  const questionsToShow = [...questions.entries()]
    .filter(([, question]) => question.type === 'choice')
    .map(([id, question]) => ({
      id,
      question: question as SurveyPollChoiceQuestion,
    }));

  const initialResults = questionsToShow.reduce(
    (acc: ReducedResults, { id, question }) => {
      acc[id] = question.choices.reduce(
        (accQuestion, choice) => {
          accQuestion[choice.value] = 0;
          return accQuestion;
        },
        {} as Record<string, number>
      );

      return acc;
    },
    {} as ReducedResults
  );

  return results.reduce((acc: ReducedResults, result: SurveyResult) => {
    const { values } = result;

    Object.entries(values).forEach(([id, value]) => {
      acc[id]![value] += 1;
    });
    return acc;
  }, initialResults);
};
