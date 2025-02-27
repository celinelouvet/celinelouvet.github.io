import {
  Box,
  type BoxProps,
  Center,
  type RecipeVariantProps,
  useRecipe,
} from '@chakra-ui/react';
import * as React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import { useColorModeToken } from '@/hooks';
import { type SurveyPollChoiceQuestion } from '@/models';

import { surveyResultsPieRecipe } from './SurveyResultsPie.recipe';
import { useQuestionResults } from '../useQuestionResults';

type SurveyResultsPieVariantProps = RecipeVariantProps<
  typeof surveyResultsPieRecipe
> & { question: SurveyPollChoiceQuestion; results: Record<string, number> };

export interface SurveyResultsPieProps
  extends Omit<BoxProps, 'question' | 'results'>,
    React.PropsWithChildren<SurveyResultsPieVariantProps> {}

export const SurveyResultsPie = React.forwardRef<
  HTMLDivElement,
  SurveyResultsPieProps
>(function (props, ref) {
  const { question, results, ...restProps } = props;

  const { data } = useQuestionResults(question, results);

  const recipe = useRecipe({ recipe: surveyResultsPieRecipe });
  const styles = recipe(props);

  const labelColor = useColorModeToken('brand.900', 'brand.100');

  return (
    <Center ref={ref} css={styles}>
      <Box {...restProps}>
        <PieChart
          data={data}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{
            fontSize: '0.5em',
            fill: labelColor,
            fontFamily: 'nunito',
            fontWeight: 'bold',
          }}
          radius={42}
        />
      </Box>
    </Center>
  );
});
