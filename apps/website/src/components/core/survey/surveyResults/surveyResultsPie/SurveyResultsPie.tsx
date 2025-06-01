import {
  Box,
  type BoxProps,
  Center,
  type RecipeVariantProps,
  useRecipe,
} from '@chakra-ui/react';
import { type SurveyPollChoiceQuestion } from '@repo/models';
import * as React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import { surveyResultsPieRecipe } from './SurveyResultsPie.recipe';
import { useColorModeToken } from '../useColorModeToken.hook';
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
>(function SurveyResultsPie(props, ref) {
  const { question, results, ...restProps } = props;

  const { data } = useQuestionResults(question, results);

  const recipe = useRecipe({ recipe: surveyResultsPieRecipe });
  const styles = recipe(restProps);

  const labelColor = useColorModeToken('brand.900', 'brand.100');

  return (
    <Center ref={ref} css={styles}>
      <Box {...restProps}>
        <PieChart
          data={data}
          label={({ dataEntry }) =>
            dataEntry.value !== 0 ? dataEntry.title : ''
          }
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
