import { useEffect, useState } from 'react';

import { useApi } from '@/hooks';
import {
  type SurveyPoll,
  type SurveyPollChoiceQuestion,
  type SurveyResult,
  asSurveyResults,
} from '@/models';

import { useSurveyInfos } from './useSurveyInfos.hook';

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

const reduceResults = (
  results: SurveyResult[],
  questionsToShow: QuestionToShow[]
): ReducedResults => {
  const initialResults = initiateResults(questionsToShow);

  return results.reduce((acc: ReducedResults, result: SurveyResult) => {
    const { values } = result;

    Object.entries(values).forEach(([id, value]) => {
      const accQuestion = acc[id] as Record<string, number> | undefined;
      if (accQuestion) {
        const result = accQuestion[value] ?? 0;

        accQuestion[value] = result + 1;
      }
    });
    return acc;
  }, initialResults);
};

export const useSurveyResults = (
  { questions, surveyIds }: SurveyPoll,
  talkSubjectId?: string | string[]
) => {
  const [results, setResults] = useState<ReducedResults>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { get } = useApi();
  const { surveyId } = useSurveyInfos(surveyIds, talkSubjectId);

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
