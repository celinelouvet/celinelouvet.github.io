import {
  Card,
  CardBody,
  CardHeader,
  type StyleConfig,
  Text,
  Textarea,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type SurveyPollTextQuestion as SurveyPollTextQuestionModel } from '@/models';

type SurveyPollTextQuestionProps = {
  question: SurveyPollTextQuestionModel;
  onAnswer: (value: string, next: string) => void;
};

export const SurveyPollTextQuestion = forwardRef<
  SurveyPollTextQuestionProps,
  'div'
>(({ question, onAnswer }, ref) => {
  const [value, setValue] = useState('');
  const styles = useStyleConfig('SurveyTextQuestion');
  const { t } = useTranslation('components', { keyPrefix: 'survey' });

  const { title, next, optional } = question;

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    onAnswer(value, next);
  };

  return (
    <Card variant="outline" ref={ref} sx={styles}>
      <CardHeader>
        <H2Heading>{title}</H2Heading>
        {optional ? <Text>{t('optional')}</Text> : null}
        <Text>{t('private')}</Text>
      </CardHeader>
      <CardBody>
        <Textarea
          value={value}
          onChange={handleInputChange}
          onSubmit={handleInputChange}
          placeholder={title}
          autoCorrect="on"
          spellCheck="true"
          size="sm"
        />
      </CardBody>
    </Card>
  );
});

export const surveyPollTextQuestionStyles = {
  baseStyle: {},
} satisfies StyleConfig;
