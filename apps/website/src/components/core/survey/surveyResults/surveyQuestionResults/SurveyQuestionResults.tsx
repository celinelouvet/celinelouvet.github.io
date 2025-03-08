import {
  Card,
  Flex,
  type SlotRecipeProps,
  useSlotRecipe,
} from '@chakra-ui/react';
import { type SurveyPollChoiceQuestion } from '@repo/models';
import * as React from 'react';

import { H2Heading } from '@/components/core';

import { SurveyResultsBreakdown } from '../surveyResultsBreakdown';
import { SurveyResultsPie } from '../surveyResultsPie';

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
>(function (props, ref) {
  const { question, results, ...restProps } = props;

  const recipe = useSlotRecipe({ key: 'surveyQuestionResults' });
  const styles = recipe(restProps);

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
          <SurveyResultsBreakdown
            question={question}
            results={results}
            css={styles.breakdown}
          />
        </Flex>
      </Card.Body>
    </Card.Root>
  );
});
