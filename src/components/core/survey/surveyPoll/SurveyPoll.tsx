import {
  Box,
  Stack,
  StackItem,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { useApi, useLogger, useSurvey, useSurveyInfos } from '@/hooks';
import {
  type SurveyPoll as SurveyPollModel,
  type SurveyPollQuestion as SurveyPollQuestionModel,
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
  survey: SurveyPollModel;
  talkSubjectId?: string | string[];
};

export const SurveyPoll = forwardRef<SurveyPollProps, 'div'>(
  ({ survey: { title, questions, surveyIds }, talkSubjectId }, ref) => {
    const { post } = useApi();
    const { log } = useLogger();
    const { states, values, setState, setValue } = useSurvey(questions);
    const { surveyId, isOpen } = useSurveyInfos(surveyIds, talkSubjectId);

    const { t } = useTranslation('components', { keyPrefix: 'survey' });
    const styles = useStyleConfig('SurveyPoll');

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

    return (
      <Stack spacing="8" ref={ref} sx={styles}>
        <StackItem>
          <H2Heading size="lg" textAlign="center">
            {title}
          </H2Heading>
        </StackItem>
        {isOpen ? (
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
        ) : (
          <Box textAlign="center">{t('closed')}</Box>
        )}
      </Stack>
    );
  }
);

export const surveyPollStyles = {
  baseStyle: {},
} satisfies StyleConfig;
