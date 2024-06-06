import { type FC } from 'react';

import { SlideDeck, SlideNote, ViewTypes } from '@/components/core';
import { useSurveyResults, useWindowFocus } from '@/hooks';
import { type SurveyPollChoiceQuestion } from '@/models';

import {
  Error,
  Loader,
  NoSurveyFound,
  SurveyResultsChoice,
} from './components';

type SurveyResultsProps = {
  talkSubjectId?: string | string[];
  conventionId?: string | string[];
};

export const Slides: FC<SurveyResultsProps> = ({
  talkSubjectId,
  conventionId,
}: SurveyResultsProps) => {
  const { surveyPoll, loading, results, error, refreshQuery } =
    useSurveyResults(talkSubjectId, conventionId);
  useWindowFocus((hasFocus) => {
    if (!hasFocus) return;
    refreshQuery();
  });

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
