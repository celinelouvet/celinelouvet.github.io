import {
  Card,
  HStack,
  RadioGroup,
  type SlotRecipeProps,
  Text,
  useSlotRecipe,
} from '@chakra-ui/react';
import { type SurveyPollChoiceQuestion as SurveyPollChoiceQuestionModel } from '@repo/models';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';

type SurveyPollChoiceQuestionVariantProps =
  SlotRecipeProps<'surveyPollChoiceQuestion'> & {
    question: SurveyPollChoiceQuestionModel;
    onAnswer: (value: string, next: string, oldNext?: string) => void;
  };

export interface SurveyPollChoiceQuestionProps
  extends Card.RootProps,
    React.PropsWithChildren<SurveyPollChoiceQuestionVariantProps> {}

export const SurveyPollChoiceQuestion = React.forwardRef<
  HTMLDivElement,
  SurveyPollChoiceQuestionProps
>(function SurveyPollChoiceQuestion(props, ref) {
  const { question, onAnswer, ...restProps } = props;

  const recipe = useSlotRecipe({ key: 'surveyPollChoiceQuestion' });
  const styles = recipe(restProps);

  const [value, setValue] = React.useState('');
  const { t } = useTranslation('components', { keyPrefix: 'survey' });

  const onSelect = (newValue: string | null) => {
    if (!newValue) {
      return;
    }

    const oldValue = value;

    setValue(newValue);

    const newChoice = choices.find((choice) => choice.value === newValue);
    if (!newChoice) {
      return;
    }

    const oldChoice = choices.find((choice) => choice.value === oldValue);

    onAnswer(newValue, newChoice.next, oldChoice?.next);
  };

  const { title, choices, optional } = question;
  return (
    <Card.Root variant="outline" ref={ref} css={styles.root} {...restProps}>
      <Card.Header css={styles.header}>
        <H2Heading>{title}</H2Heading>
        {optional ? <Text>{t('optional')}</Text> : null}
      </Card.Header>
      <Card.Body css={styles.body}>
        <RadioGroup.Root
          onValueChange={(details) => onSelect(details.value)}
          value={value}
        >
          <HStack gap="4">
            {choices.map((choice) => (
              <RadioGroup.Item
                key={choice.value}
                value={choice.value}
                css={styles.item}
              >
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator css={styles.indicator} />
                <RadioGroup.ItemText>{choice.text}</RadioGroup.ItemText>
              </RadioGroup.Item>
            ))}
          </HStack>
        </RadioGroup.Root>
      </Card.Body>
    </Card.Root>
  );
});
