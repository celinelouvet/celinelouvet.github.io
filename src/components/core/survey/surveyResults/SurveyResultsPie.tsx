import {
  Box,
  type BoxProps,
  Center,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
  useToken,
} from '@chakra-ui/react';
import { PieChart } from 'react-minimal-pie-chart';

import { type SurveyPollChoiceQuestion } from '@/models';

type SurveyResultsPieProps = Omit<BoxProps, 'results'> & {
  question: SurveyPollChoiceQuestion;
  results: Record<string, number>;
};

export const SurveyResultsPie = forwardRef<SurveyResultsPieProps, 'div'>(
  ({ question, results, ...props }, ref) => {
    const style = useStyleConfig('SurveyResultsPie');
    const brand900 = useToken('colors', 'brand.900');

    const { choices } = question;

    const data = choices.map(({ text, value, color }) => ({
      title: text,
      value: results[value] ?? 0,
      color,
    }));

    return (
      <Center ref={ref} sx={style}>
        <Box {...props}>
          <PieChart
            data={data}
            label={({ dataEntry }) =>
              dataEntry.value !== 0 ? dataEntry.title : ''
            }
            labelStyle={{
              fontSize: '0.5em',
              fill: brand900,
              fontFamily: 'nunito',
              fontWeight: 'bold',
            }}
            radius={42}
          />
        </Box>
      </Center>
    );
  }
);

export const surveyResultsPieStyles = {
  baseStyle: {},
} satisfies StyleConfig;
