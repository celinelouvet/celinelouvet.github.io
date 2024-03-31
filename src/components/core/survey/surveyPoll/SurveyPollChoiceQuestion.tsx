import {
  Card,
  CardBody,
  CardHeader,
  Radio,
  RadioGroup,
  Stack,
  type StyleConfig,
  Text,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';
import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import {
  type SurveyPollChoice,
  type SurveyPollChoiceQuestion as SurveyPollChoiceQuestionModel,
} from '@/models';

type QuestionChoicesProps = {
  choices: SurveyPollChoice[];
  onSelect: (value: string, next: string, oldNext?: string) => void;
};

const QuestionChoices: FC<QuestionChoicesProps> = ({ choices, onSelect }) => {
  const [value, setValue] = useState('');

  const onChange = (newValue: string) => {
    const oldValue = value;

    setValue(newValue);

    const newChoice = choices.find((choice) => choice.value === newValue);
    if (!newChoice) {
      return;
    }

    const oldChoice = choices.find((choice) => choice.value === oldValue);

    onSelect(newValue, newChoice.next, oldChoice?.next);
  };

  return (
    <RadioGroup onChange={onChange} value={value}>
      <Stack spacing="4">
        {choices.map(({ text, value }) => (
          <Radio value={value} key={text}>
            {text}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

type SurveyPollChoiceQuestionProps = {
  question: SurveyPollChoiceQuestionModel;
  onAnswer: (value: string, next: string, oldNext?: string) => void;
};

export const SurveyPollChoiceQuestion = forwardRef<
  SurveyPollChoiceQuestionProps,
  'div'
>(({ question, onAnswer }, ref) => {
  const styles = useStyleConfig('SurveyPollChoiceQuestion');
  const { t } = useTranslation('components', { keyPrefix: 'survey' });

  const { title, choices, optional } = question;
  return (
    <Card variant="outline" ref={ref} sx={styles}>
      <CardHeader>
        <H2Heading>{title}</H2Heading>
        {optional ? <Text>{t('optional')}</Text> : null}
      </CardHeader>
      <CardBody>
        <QuestionChoices choices={choices} onSelect={onAnswer} />
      </CardBody>
    </Card>
  );
});

export const surveyPollChoiceQuestionStyles = {
  baseStyle: {},
} satisfies StyleConfig;
