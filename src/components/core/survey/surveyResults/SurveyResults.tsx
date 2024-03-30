import {
  Box,
  Skeleton,
  Stack,
  StackItem,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';

import { H2Heading, SurveyResultsChoice } from '@/components/core';
import { useSurveyResults } from '@/hooks';
import { type SurveyPoll, type SurveyPollChoiceQuestion } from '@/models';

type SurveyResultsProps = {
  survey: SurveyPoll;
};

export const SurveyResults = forwardRef<SurveyResultsProps, 'div'>(
  ({ survey }, ref) => {
    const styles = useStyleConfig('SurveyResults');

    const { loading, results, error } = useSurveyResults(survey);

    if (error) return <Box>Erreur</Box>;

    const { title, questions } = survey;

    const questionsToShow = [...questions.entries()]
      .filter(([, question]) => question.type === 'choice')
      .map(([id, question]) => ({
        id,
        question: question as SurveyPollChoiceQuestion,
      }));

    return (
      <Stack spacing="8" ref={ref} sx={styles}>
        <StackItem>
          <H2Heading size="lg" textAlign="center">
            {title}
          </H2Heading>
        </StackItem>
        {questionsToShow.map(({ id, question }) => (
          <StackItem key={id}>
            <Skeleton isLoaded={!loading} minHeight="5em">
              <SurveyResultsChoice question={question} results={results[id]} />
            </Skeleton>
          </StackItem>
        ))}
      </Stack>
    );
  }
);

export const surveyResultsStyles = {
  baseStyle: {},
} satisfies StyleConfig;
