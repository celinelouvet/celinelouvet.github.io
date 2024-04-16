import { useEffect, useState } from 'react';

import { useApi } from '@/hooks';
import {
  type SurveyPoll,
  type SurveyPollChoiceQuestion,
  type SurveyResult,
  asSurveyResults,
} from '@/models';

type ReducedResults = Record<string, Record<string, number>>;
type QuestionToShow = {
  id: string;
  question: SurveyPollChoiceQuestion;
};

const filterQuestionsToShow = (
  questions: SurveyPoll['questions']
): QuestionToShow[] =>
  [...questions.entries()]
    .filter(([, question]) => question.type === 'choice')
    .map(([id, question]) => ({
      id,
      question: question as SurveyPollChoiceQuestion,
    }));

const reduceQuestion = (question: SurveyPollChoiceQuestion) =>
  question.choices.reduce(
    (accQuestion, choice) => {
      accQuestion[choice.value] = 0;
      return accQuestion;
    },
    {} as Record<string, number>
  );

const initiateResults = (questionsToShow: QuestionToShow[]) =>
  questionsToShow.reduce((acc: ReducedResults, { id, question }) => {
    acc[id] = { ...reduceQuestion(question) };
    return acc;
  }, {} as ReducedResults);

export const useSurveyResults = ({ surveyId, questions }: SurveyPoll) => {
  const [results, setResults] = useState<ReducedResults>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { get } = useApi();

  const questionsToShow = filterQuestionsToShow(questions);

  useEffect(() => {
    if (!loading) return;

    get(`/survey/${surveyId}`)
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
  }, [get, surveyId, loading, questionsToShow]);

  return { results, loading, error };
};

const reduceResults = (
  results: SurveyResult[],
  questionsToShow: QuestionToShow[]
) => {
  const initialResults = initiateResults(questionsToShow);

  return results.reduce((acc: ReducedResults, result: SurveyResult) => {
    const { values } = result;

    Object.entries(values).forEach(([id, value]) => {
      if (acc[id]) {
        acc[id]![value] += 1;
      }
    });
    return acc;
  }, initialResults);
};
