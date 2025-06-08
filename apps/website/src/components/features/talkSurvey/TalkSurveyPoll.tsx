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

    const {
      surveyId,
      surveyPoll,
      surveyState,
      states,
      values,
      setState,
      setValue,
    } = useSurveyPoll(talkSubjectId, conventionId);

    if (surveyPoll === null || surveyId === null) {
      return <Box>{t('noSurvey')}</Box>;
    }

    const { questions, title } = surveyPoll;

    function ifOptional(current: string) {
      const question = questions.get(current);

      if (question && question.optional && 'next' in question) {
        setState(question.next, true);
      }
    }

    async function logAnswer(key: string) {
      const question = questions.get(key);

      if (question && 'title' in question) {
        await log('Answer selected', { title, question: question.title });
      }
    }

    async function onAnswer(
      key: string,
      value: string,
      next: string,
      oldNext?: string,
    ) {
      setValue(key, value, oldNext !== undefined);

      if (oldNext) {
        setState(oldNext, false);
      }
      setState(next, true);

      ifOptional(next);
      await logAnswer(key);
    }

    function onSubmit() {
      post('/survey', { surveyId, title, values: Object.fromEntries(values) });
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
          {[...questions.entries()].map(([key, question]) => (
            <Box key={key} display={states.get(key) ? '' : 'none'}>
              <QuestionContent
                id={key}
                question={question}
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
