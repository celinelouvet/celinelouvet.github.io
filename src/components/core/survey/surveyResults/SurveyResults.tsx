import {
  Box,
  Skeleton,
  Stack,
  StackItem,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { H2Heading, SurveyResultsChoice } from '@/components/core';
import { useSurveyResults } from '@/hooks';
import { type SurveyPollChoiceQuestion } from '@/models';

type SurveyResultsProps = {
  talkSubjectId?: string | string[];
  conventionId?: string | string[];
};

export const SurveyResults = forwardRef<SurveyResultsProps, 'div'>(
  ({ talkSubjectId, conventionId }, ref) => {
    const styles = useStyleConfig('SurveyResults');
    const { t } = useTranslation('components', {
      keyPrefix: 'survey',
    });

    const { surveyPoll, loading, results, error } = useSurveyResults(
      talkSubjectId,
      conventionId
    );

    if (surveyPoll === null) return <Box>{t('noSurvey')}</Box>;
    if (error) return <Box>{t('error')}</Box>;

    const { title, questions } = surveyPoll;

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
