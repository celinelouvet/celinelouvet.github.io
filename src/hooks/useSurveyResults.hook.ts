import { useEffect, useState } from 'react';

import { useApi, useSurveyInfos } from '@/hooks';
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
  talkSubjectId?: string | string[],
  conventionId?: string | string[]
) => {
  const [surveyId, setSurveyId] = useState<string | null>(null);
  const [surveyPoll, setSurveyPoll] = useState<SurveyPoll | null>(null);
  const [results, setResults] = useState<ReducedResults>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { get } = useApi();

  const surveyInfos = useSurveyInfos(talkSubjectId, conventionId);

  useEffect(() => {
    if (!loading) return;

    setSurveyId(surveyInfos.surveyId);
    setSurveyPoll(surveyInfos.surveyPoll);

    if (surveyInfos.surveyId === null || surveyInfos.surveyPoll === null) {
      return;
    }

    const questionsToShow = filterQuestionsToShow(
      surveyInfos.surveyPoll.questions
    );

    get(`/survey/${surveyInfos.surveyId}`)
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
  }, [
    get,
    setSurveyId,
    setSurveyPoll,
    setError,
    loading,
    surveyInfos.surveyId,
    surveyInfos.surveyPoll,
  ]);

  return { surveyId, surveyPoll, results, loading, error };
};
