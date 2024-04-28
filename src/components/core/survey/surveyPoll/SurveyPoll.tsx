import {
  Box,
  Button,
  Stack,
  StackItem,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading, H3Heading } from '@/components/core';
import { useApi, useLogger, useSurveyPoll } from '@/hooks';
import {
  type SurveyPollQuestion as SurveyPollQuestionModel,
  SurveyState,
} from '@/models';

import { SurveyPollChoiceQuestion } from './SurveyPollChoiceQuestion';
import { SurveyPollSubmit } from './SurveyPollSubmit';
import { SurveyPollTextQuestion } from './SurveyPollTextQuestion';

type QuestionContentProps = {
  id: string;
  question: SurveyPollQuestionModel;
  onAnswer: (id: string, value: string, next: string, oldNext?: string) => void;
  onSubmit: () => void;
};

const QuestionContent: FC<QuestionContentProps> = ({
  id,
  question,
  onAnswer,
  onSubmit,
}) => {
  const { type } = question;

  switch (type) {
    case 'choice':
      return (
        <SurveyPollChoiceQuestion
          question={question}
          onAnswer={(value: string, next: string, oldNext?: string) =>
            onAnswer(id, value, next, oldNext)
          }
        />
      );
    case 'text':
      return (
        <SurveyPollTextQuestion
          question={question}
          onAnswer={(value: string, next: string) => onAnswer(id, value, next)}
        />
      );
    case 'submit':
      return <SurveyPollSubmit onSubmit={onSubmit} />;
  }
};

type SurveyPollProps = {
  talkSubjectId?: string | string[];
  conventionId?: string | string[];
};

export const SurveyPoll = forwardRef<SurveyPollProps, 'div'>(
  ({ talkSubjectId, conventionId }, ref) => {
    const { post } = useApi();
    const { log } = useLogger();
    const { t } = useTranslation('components', { keyPrefix: 'survey' });
    const styles = useStyleConfig('SurveyPoll');

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

    const ifOptional = (current: string) => {
      const question = questions.get(current);

      if (question && question.optional && 'next' in question) {
        setState(question.next, true);
      }
    };

    const logAnswer = async (key: string) => {
      const question = questions.get(key);

      if (question && 'title' in question) {
        await log('Answer selected', { title, question: question.title });
      }
    };

    const onAnswer = async (
      key: string,
      value: string,
      next: string,
      oldNext?: string
    ) => {
      setValue(key, value);
      if (oldNext) {
        setState(oldNext, false);
      }
      setState(next, true);

      ifOptional(next);
      await logAnswer(key);
    };

    const onSubmit = () => {
      post('/survey', { surveyId, title, values: Object.fromEntries(values) });
      log('Survey submitted', { title });
    };

    const Unknown = <Box textAlign="center">{t('error')}</Box>;
    const NotYetOpened = <Box textAlign="center">{t('notYetOpened')}</Box>;
    const AlreadyClosed = (
      <>
        <Stack alignItems="center" gap="16">
          <H3Heading>{t('closed')}</H3Heading>
          <Button
            as={NextLink}
            href={`/talks/${talkSubjectId}/${conventionId}/results`}
          >
            {t('results')}
          </Button>
        </Stack>
      </>
    );
    const Opened = (
      <form>
        <Stack spacing="4">
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
      <Stack spacing="8" ref={ref} sx={styles}>
        <StackItem>
          <H2Heading size="lg" textAlign="center">
            {title}
          </H2Heading>
        </StackItem>
        {surveyState === SurveyState.Unknown ? Unknown : null}
        {surveyState === SurveyState.NotStarted ? NotYetOpened : null}
        {surveyState === SurveyState.InProgress ? Opened : null}
        {surveyState === SurveyState.Completed ? AlreadyClosed : null}
      </Stack>
    );
  }
);

export const surveyPollStyles = {
  baseStyle: {},
} satisfies StyleConfig;
