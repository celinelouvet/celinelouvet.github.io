import { Box, Stack, type StackProps } from '@chakra-ui/react';
import { SurveyState } from '@repo/models';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading, H3Heading, Link } from '@/components/core';
import { useApi, useLogger } from '@/hooks';

import { QuestionContent } from './QuestionContent';
import { useSurveyPoll } from './useSurveyPoll.hook';

export interface SurveyPollProps
  extends StackProps,
    React.PropsWithChildren<{
      talkSubjectId?: string | string[];
      conventionId?: string | string[];
    }> {}

export const TalkSurveyPoll = React.forwardRef<HTMLDivElement, SurveyPollProps>(
  function TalkSurveyPoll({ talkSubjectId, conventionId }, ref) {
    const { post } = useApi();
    const { log } = useLogger();
    const { t } = useTranslation('components', { keyPrefix: 'survey' });

    const { surveyId, surveyPoll, surveyState, survey, setAnswer, getResults } =
      useSurveyPoll(talkSubjectId, conventionId);

    if (surveyPoll === null || surveyId === null) {
      return <Box>{t('noSurvey')}</Box>;
    }

    const { title } = surveyPoll;

    async function logAnswer(key: string) {
      const questionState = survey.get(key);
      if (questionState === undefined) {
        return;
      }

      const questionTitle =
        ('title' in questionState.question && questionState.question.title) ??
        'unknown question';

      await log('Answer selected', { title, question: questionTitle });
    }

    async function onAnswer(key: string, value: 'yes' | 'no' | string) {
      setAnswer(key, value);

      await logAnswer(key);
    }

    function onSubmit() {
      const results = getResults();
      if (!results) {
        return;
      }
      post('/survey', results);
      log('Survey submitted', { title });
    }

    const Unknown = <Box textAlign="center">{t('error')}</Box>;
    const NotYetOpened = <Box textAlign="center">{t('notYetOpened')}</Box>;
    const AlreadyClosed = (
      <>
        <Stack alignItems="center" gap="16">
          <H3Heading>{t('closed')}</H3Heading>
          <Link.Internal to={`/talks/${talkSubjectId}/${conventionId}/results`}>
            {t('results')}
          </Link.Internal>
        </Stack>
      </>
    );
    const Opened = (
      <form>
        <Stack gap="4">
          {[...survey.entries()].map(([key, questionState]) => (
            <Box key={key} display={questionState.shown ? '' : 'none'}>
              <QuestionContent
                id={key}
                question={questionState.question}
                onAnswer={onAnswer}
                onSubmit={onSubmit}
              />
            </Box>
          ))}
        </Stack>
      </form>
    );

    return (
      <Stack gap="8" ref={ref}>
        <Box>
          <H2Heading size="lg" textAlign="center">
            {title}
          </H2Heading>
        </Box>
        {surveyState === SurveyState.Unknown ? Unknown : null}
        {surveyState === SurveyState.NotStarted ? NotYetOpened : null}
        {surveyState === SurveyState.InProgress ? Opened : null}
        {surveyState === SurveyState.Completed ? AlreadyClosed : null}
      </Stack>
    );
  },
);
