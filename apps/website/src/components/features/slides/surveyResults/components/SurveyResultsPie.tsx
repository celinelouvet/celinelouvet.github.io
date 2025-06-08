import { useToken } from '@chakra-ui/react';
import { type SurveyPollChoiceQuestion } from '@repo/models';
import * as React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import { useQuestionResults } from '@/components/core/survey/surveyResults/useQuestionResults';

type SurveyResultsPieProps = {
  question: SurveyPollChoiceQuestion;
  results: Record<string, number>;
};

export const SurveyResultsPie: React.FC<SurveyResultsPieProps> =
  function SurveyResultsPie({ question, results }) {
    const { data } = useQuestionResults(question, results);
    const [brand900] = useToken('colors', 'brand.900');

    return (
      <PieChart
        data={data}
        label={({ dataEntry }) =>
          dataEntry.value !== 0 ? dataEntry.title : ''
        }
        labelStyle={{
          fontSize: '0.2em',
          fill: brand900,
          fontFamily: 'nunito',
          fontWeight: 'bold',
        }}
        radius={42}
      />
    );
  };
