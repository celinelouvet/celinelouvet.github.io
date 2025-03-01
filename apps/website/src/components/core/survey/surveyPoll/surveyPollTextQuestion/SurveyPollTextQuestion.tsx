import {
  type BoxProps,
  Card,
  type SlotRecipeProps,
  Text,
  Textarea,
  useSlotRecipe,
} from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type SurveyPollTextQuestion as SurveyPollTextQuestionModel } from '@/models';

type SurveyPollTextQuestionVariantProps =
  SlotRecipeProps<'surveyPollTextQuestion'> & {
    question: SurveyPollTextQuestionModel;
    onAnswer: (value: string, next: string) => void;
  };

export interface SurveyPollTextQuestionProps
  extends BoxProps,
    React.PropsWithChildren<SurveyPollTextQuestionVariantProps> {}

export const SurveyPollTextQuestion = React.forwardRef<
  HTMLDivElement,
  SurveyPollTextQuestionProps
>(function (props, ref) {
  const { question, onAnswer, ...restProps } = props;

  const recipe = useSlotRecipe({ key: 'surveyPollTextQuestion' });
  const styles = recipe(restProps);

  const [value, setValue] = React.useState('');
  const { t } = useTranslation('components', { keyPrefix: 'survey' });

  const { title, next, optional } = question;

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    onAnswer(value, next);
  };

  return (
    <Card.Root variant="outline" ref={ref} css={styles.root} {...restProps}>
      <Card.Header css={styles.header}>
        <H2Heading>{title}</H2Heading>
        {optional ? <Text>{t('optional')}</Text> : null}
        <Text>{t('private')}</Text>
      </Card.Header>
      <Card.Body css={styles.body}>
        <Textarea
          value={value}
          onChange={handleInputChange}
          onSubmit={handleInputChange}
          placeholder={title}
          autoCorrect="on"
          spellCheck="true"
          size="sm"
          css={styles.textarea}
        />
      </Card.Body>
    </Card.Root>
  );
});
