import { type FC } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import { type SurveyPollChoiceQuestion } from '@/models';

type SurveyResultsPieProps = {
  question: SurveyPollChoiceQuestion;
  results: Record<string, number>;
};

export const SurveyResultsPie: FC<SurveyResultsPieProps> = ({
  question,
  results,
}) => {
  const gray500 = '#718096';
  const brand900 = '#f3f8fb';

  const { choices } = question;

  const emptyData = [{ title: 'No votes', value: 1, color: gray500 }];

  const data = choices.map(({ text, value, color }) => {
    const newValue = results[value] ?? 0;

    return { title: text, value: newValue, color };
  });

  const total = Object.values(results).reduce((acc, value) => acc + value, 0);

  return (
    <PieChart
      data={total !== 0 ? data : emptyData}
      label={
        total !== 0
          ? ({ dataEntry }) => (dataEntry.value !== 0 ? dataEntry.title : '')
          : ({ dataEntry }) => dataEntry.title
      }
      labelStyle={{
        fontSize: '0.25em',
        fill: brand900,
        fontFamily: 'nunito',
        fontWeight: 'bold',
      }}
      radius={42}
    />
  );
};
