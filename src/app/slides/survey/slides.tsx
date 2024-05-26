import { Box } from '@chakra-ui/react';
import { type FC } from 'react';

import { SlideDeck, SlideNote, ViewTypes } from '@/components/core';
import { useSurveyResults } from '@/hooks';
import { type SurveyPollChoiceQuestion } from '@/models';

import { SurveyResultsChoice } from './SurveyResultsChoice';

type SurveyResultsProps = {
  talkSubjectId?: string | string[];
  conventionId?: string | string[];
};

export const Slides: FC<SurveyResultsProps> = ({
  talkSubjectId,
  conventionId,
}: SurveyResultsProps) => {
  const { surveyPoll, loading, results, error } = useSurveyResults(
    talkSubjectId,
    conventionId
  );

  if (surveyPoll === null)
    return <Box>Aucun sondage disponible pour cette conférence.</Box>;
  if (error) return <Box>Une erreur est survenue.</Box>;
  if (loading) return <Box>Loading</Box>;

  const { questions } = surveyPoll;

  const questionsToShow = [...questions.entries()]
    .filter(([, question]) => question.type === 'choice')
    .map(([id, question]) => ({
      id,
      question: question as SurveyPollChoiceQuestion,
    }));

  const slides = questionsToShow.map(({ id, question }) => {
    const result = results[id];
    return {
      content: (
        <SurveyResultsChoice key={id} question={question} results={result} />
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
