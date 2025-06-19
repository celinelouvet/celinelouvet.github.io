import {
  type SurveyPoll,
  type SurveyPollQuestion,
  type SurveyResult,
  SurveyState,
} from '@repo/models';
import * as React from 'react';

import { useSurveyInfos } from './useSurveyInfos.hook';

type AnswerValue = 'yes' | 'no' | string;
export type SurveyAnswer = {
  question: SurveyPollQuestion;
  answer: AnswerValue | null;
  shown: boolean;
};

export function useSurveyPoll(
  talkSubjectId?: string | string[],
  conventionId?: string | string[],
) {
  const [surveyId, setSurveyId] = React.useState<string | null>(null);
  const [surveyPoll, setSurveyPoll] = React.useState<SurveyPoll | null>(null);
  const [surveyState, setSurveyState] = React.useState<SurveyState>(
    SurveyState.Unknown,
  );
  const [survey, setSurvey] = React.useState<Map<string, SurveyAnswer>>(
    new Map(),
  );
  const [results, setResults] = React.useState<Map<string, AnswerValue>>(
    new Map(),
  );

  const surveyInfos = useSurveyInfos(talkSubjectId, conventionId);

  React.useEffect(() => {
    if (surveyInfos.surveyId === null || surveyInfos.surveyPoll === null) {
      return;
    }

    setSurveyState(surveyInfos.state);
    setSurveyId(surveyInfos.surveyId);
    setSurveyPoll(surveyInfos.surveyPoll);

    const initialSurveyAnswers = new Map(
      [...surveyInfos.surveyPoll.questions.entries()].map(([key, question]) => [
        key,
        { question, answer: null, shown: key === 'question1' },
      ]),
    );
    setSurvey(initialSurveyAnswers);
  }, [
    surveyInfos.surveyId,
    surveyInfos.surveyPoll,
    surveyInfos.state,
    setSurveyId,
    setSurveyPoll,
    setSurveyState,
    setSurvey,
  ]);

  const getNextQuestionId = React.useCallback(
    (questionId: string, value: AnswerValue | null): string | null => {
      const questionState = survey.get(questionId);
      if (!questionState) {
        return null;
      }

      if (questionState.question.type === 'submit') {
        return null;
      }

      if (questionState.question.type === 'text') {
        return questionState.question.next;
      }

      if (questionState.question.type === 'choice') {
        const choice = questionState.question.choices.find(
          (c) => c.value === value,
        );
        return choice ? choice.next : null;
      }

      return null;
    },
    [survey],
  );

  const clearAnswer = React.useCallback(
    (questionId: string | null) => {
      if (questionId === null) {
        return;
      }
      const questionState = survey.get(questionId);
      if (!questionState) {
        return;
      }

      const previousAnswer = questionState.answer;
      const nextQuestionId = getNextQuestionId(questionId, previousAnswer);

      survey.set(questionId, {
        question: questionState.question,
        answer: null,
        shown: false,
      });
      setSurvey(new Map(survey.entries()));

      clearAnswer(nextQuestionId);
    },
    [survey, getNextQuestionId],
  );

  const updateAnswer = React.useCallback(
    (questionId: string, value: AnswerValue | null) => {
      const questionState = survey.get(questionId);
      if (!questionState) {
        return;
      }

      const question = questionState.question;

      if (question.type === 'choice') {
        question.choices.forEach((choice) => {
          const nextQuestionState = survey.get(choice.next);

          if (nextQuestionState) {
            survey.set(choice.next, {
              ...nextQuestionState,
              shown: choice.value === value,
            });
          }
        });
      }
      if (question.type === 'text') {
        const nextId = question.next;

        const nextQuestionState = survey.get(nextId);

        if (nextQuestionState) {
          survey.set(question.next, {
            ...nextQuestionState,
            shown: true,
          });
        }
      }

      survey.set(questionId, { ...questionState, answer: value, shown: true });
      setSurvey(new Map(survey.entries()));
    },
    [survey],
  );

  const setAnswer = React.useCallback(
    (questionId: string | null, value: AnswerValue | null) => {
      if (questionId === null) {
        return;
      }
      const questionState = survey.get(questionId);
      if (!questionState) {
        return;
      }

      if (
        value !== questionState.answer &&
        (questionState.answer !== null || questionState.shown)
      ) {
        clearAnswer(questionId);
      }

      updateAnswer(questionId, value);
    },
    [survey, clearAnswer, updateAnswer],
  );

  const buildAnswers = React.useCallback(
    (questionId: string) => {
      const questionState = survey.get(questionId);
      if (!questionState || questionState.answer === null) {
        return;
      }
      const question = questionState.question;
      if (question.type === 'submit') {
        return;
      }

      results.set(questionId, questionState.answer);
      setResults(new Map(results));

      if (question.type === 'text') {
        if (question.next) {
          buildAnswers(question.next);
        }
      }
      if (question.type === 'choice') {
        const choice = question.choices.find(
          (c) => c.value === questionState.answer,
        );
        if (choice && choice.next) {
          buildAnswers(choice.next);
        }
      }
    },
    [survey, results],
  );

  const getResults = React.useCallback(() => {
    if (surveyId === null || surveyPoll === null) {
      return;
    }
    buildAnswers('question1');

    return {
      surveyId,
      title: surveyPoll.title,
      values: Object.fromEntries(results.entries()),
    } satisfies SurveyResult;
  }, [surveyId, surveyPoll, results, buildAnswers]);

  return {
    surveyId,
    surveyPoll,
    surveyState,
    survey,
    setAnswer,
    getResults,
  };
}
