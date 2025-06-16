import {
  Grid,
  type RecipeVariantProps,
  type StackProps,
  chakra,
  useRecipe,
} from '@chakra-ui/react';
import { type SurveyPollChoiceQuestion } from '@repo/models';
import * as React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import { useQuestionResults } from '../useQuestionResults';
import { surveyResultsBreakdownRecipe } from './SurveyResultsBreakdown.recipe';

type VoteResult = {
  title: string;
  value: number;
  percentage: number;
};

const SurveyVotes: React.FC<{ result: VoteResult }> = ({ result }) => {
  const { title, value, percentage } = result;
  return (
    <>
      <chakra.span fontWeight="700">{title}</chakra.span>
      <chakra.span>{percentage}%</chakra.span>
      <chakra.span>
        <BsArrowRight />
      </chakra.span>
      <chakra.span>{value}</chakra.span>
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
>(function SurveyResultsBreakdown(props, ref) {
  const { question, results, ...restProps } = props;

  const { total, data } = useQuestionResults(question, results);

  const recipe = useRecipe({ recipe: surveyResultsBreakdownRecipe });
  const styles = recipe(restProps);

  if (!question) return null;
  if (!results) return null;

  return (
    <Grid
      templateColumns="brand.300 brand.400 auto brand.400"
      columnGap="brand.100"
      rowGap="brand.50"
      alignItems="center"
      justifyItems="start"
      css={styles}
      ref={ref}
      {...restProps}
    >
      {total !== 0
        ? data.map((result) => (
            <SurveyVotes result={result} key={result.title} />
          ))
        : null}
    </Grid>
  );
});
