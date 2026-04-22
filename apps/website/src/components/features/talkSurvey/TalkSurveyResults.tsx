import { Box, Skeleton, Stack, type StackProps } from '@chakra-ui/react';
import { type SurveyPollChoiceQuestion } from '@repo/models';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading, Link, SurveyQuestionResults } from 'src/components/core';
import { useSurveyResults } from 'src/hooks';

export interface SurveyResultsProps
  extends
    StackProps,
    React.PropsWithChildren<{
      talkSubjectId?: string | string[];
      conventionId?: string | string[];
    }> {}

export const TalkSurveyResults = React.forwardRef<
  HTMLDivElement,
  SurveyResultsProps
>(function TalkSurveyResults({ talkSubjectId, conventionId }, ref) {
  const { t } = useTranslation('components', { keyPrefix: 'survey' });

  const { surveyPoll, loading, results, error } = useSurveyResults(
    talkSubjectId,
    conventionId,
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
    <Stack gap="8" ref={ref}>
      <Box>
        <H2Heading size="lg" textAlign="center">
          {title}
        </H2Heading>
      </Box>
      {questionsToShow.map(({ id, question }) => (
        <Box key={id}>
          <Skeleton loading={loading} minHeight="brand.500">
            <SurveyQuestionResults question={question} results={results[id]} />
          </Skeleton>
        </Box>
      ))}
      <Box>
        <Link.Internal to={`/talks/${talkSubjectId}/${conventionId}/sankey`}>
          As sankey graph
        </Link.Internal>
      </Box>
    </Stack>
  );
});
