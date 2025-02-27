import {
  Flex,
  Grid,
  type RecipeVariantProps,
  Stack,
  type StackProps,
  Text,
  useRecipe,
} from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { type SurveyPollChoiceQuestion } from '@/models';

import { surveyResultsBreakdownRecipe } from './SurveyResultsBreakdown.recipe';
import { useQuestionResults } from '../useQuestionResults';

type VoteResult = {
  title: string;
  value: number;
  percentage: number;
};

const SurveyVotes: React.FC<{ result: VoteResult }> = ({ result }) => {
  const { title, value, percentage } = result;
  return (
    <>
      <Text fontWeight="700" as="span">
        {title}
      </Text>
      <Text as="span">{percentage}%</Text>
      <Text as="span">→</Text>
      <Text as="span">{value}</Text>
    </>
  );
};

type SurveyResultsBreakdownVariantProps = RecipeVariantProps<
  typeof surveyResultsBreakdownRecipe
> & { question?: SurveyPollChoiceQuestion; results?: Record<string, number> };

export interface SurveyResultsBreakdownProps
  extends Omit<StackProps, 'question' | 'results'>,
    React.PropsWithChildren<SurveyResultsBreakdownVariantProps> {}

export const SurveyResultsBreakdown = React.forwardRef<
  HTMLDivElement,
  SurveyResultsBreakdownProps
>(function (props, ref) {
  const { question, results, ...restProps } = props;

  const { total, data } = useQuestionResults(question, results);

  const recipe = useRecipe({ recipe: surveyResultsBreakdownRecipe });
  const styles = recipe(props);

  const { t } = useTranslation('components', { keyPrefix: 'survey' });

  if (!question) return null;
  if (!results) return null;

  return (
    <Stack css={styles} ref={ref} {...restProps}>
      <Flex fontSize="xl" flexDirection="row" gap="1em">
        <Text fontWeight="700">{t('allVotes')}</Text>
        <Text>{total}</Text>
      </Flex>
      <Grid
        templateColumns="3em auto auto auto"
        columnGap="1em"
        rowGap="0.5em"
        alignItems="center"
        justifyItems="start"
      >
        {total !== 0
          ? data.map((result) => (
              <SurveyVotes result={result} key={result.title} />
            ))
          : null}
      </Grid>
    </Stack>
  );
});
