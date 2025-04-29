import {
  Card,
  Flex,
  type SlotRecipeProps,
  Stack,
  Text,
  useSlotRecipe,
} from '@chakra-ui/react';
import { type SurveyPollChoiceQuestion } from '@repo/models';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';

import { SurveyResultsBreakdown } from '../surveyResultsBreakdown';
import { SurveyResultsPie } from '../surveyResultsPie';
import { useQuestionResults } from '../useQuestionResults';

type SurveyQuestionResultsVariantProps =
  SlotRecipeProps<'surveyQuestionResults'> & {
    question?: SurveyPollChoiceQuestion;
    results?: Record<string, number>;
  };

export interface SurveyQuestionResultsProps
  extends Omit<Card.RootProps, 'question' | 'results'>,
    React.PropsWithChildren<SurveyQuestionResultsVariantProps> {}

export const SurveyQuestionResults = React.forwardRef<
  HTMLDivElement,
  SurveyQuestionResultsProps
>(function SurveyQuestionResults(props, ref) {
  const { question, results, ...restProps } = props;

  const recipe = useSlotRecipe({ key: 'surveyQuestionResults' });
  const styles = recipe(restProps);

  const { t } = useTranslation('components', { keyPrefix: 'survey' });

  const { total } = useQuestionResults(question, results);

  if (!question) return null;
  if (!results) return null;

  const { title } = question;

  return (
    <Card.Root variant="outline" ref={ref} css={styles.root}>
      <Card.Header css={styles.header}>
        <H2Heading>{title}</H2Heading>
      </Card.Header>
      <Card.Body css={styles.body}>
        <Flex
          alignItems="center"
          justifyContent="space-evenly"
          flexDirection={{
            base: 'column',
            sm: 'row',
          }}
        >
          <SurveyResultsPie
            question={question}
            results={results}
            css={styles.pie}
          />
          <Stack css={styles.breakdown} ref={ref}>
            <Flex fontSize="xl" flexDirection="row" gap="1em">
              <Text fontWeight="700">{t('allVotes')}</Text>
              <Text>{total}</Text>
            </Flex>

            <SurveyResultsBreakdown question={question} results={results} />
          </Stack>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
});
