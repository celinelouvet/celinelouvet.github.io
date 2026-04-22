import type { SurveyPollChoiceQuestion } from '@repo/models';
import * as React from 'react';

import { SlideDeck, SlideNote, ViewTypes } from 'src/components/slide';
import { useSurveyResults } from 'src/hooks';

import { Error, Loader, NoSurveyFound } from './components';
import { SurveyResultsChoice } from './components/SurveyResultsChoice';

type SurveyResultsProps = {
  talkSubjectId?: string;
  conventionId?: string;
};

export const SurveyResults: React.FC<SurveyResultsProps> =
  function SurveyResults({ talkSubjectId, conventionId }) {
    const { surveyPoll, loading, results, error } = useSurveyResults(
      talkSubjectId,
      conventionId,
    );

    if (surveyPoll === null) return <NoSurveyFound />;
    if (error) return <Error />;
    if (loading) return <Loader />;

    const { questions } = surveyPoll;

    const questionsToShow = [...questions.entries()]
      .filter(([, question]) => question.type === 'choice')
      .map(([id, question]) => ({
        id,
        question: question as SurveyPollChoiceQuestion,
      }));

    const slides = questionsToShow.map(({ id, question }, index) => {
      const result = results[id];
      return {
        content: (
          <SurveyResultsChoice
            key={id}
            question={question}
            results={result}
            currentIndex={index}
            questionCount={questionsToShow.length}
          />
        ),
        note: <SlideNote key={id}></SlideNote>,
      };
    });

    return (
      <SlideDeck
        slides={slides}
        view={ViewTypes.content}
        messageRoot="survey"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundColor="gray.900"
        color="white"
      />
    );
  };
