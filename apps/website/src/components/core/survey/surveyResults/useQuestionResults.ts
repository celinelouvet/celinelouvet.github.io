import { type SurveyPollChoiceQuestion } from '@repo/models';
import { useTranslation } from 'react-i18next';

import { useColorModeToken } from '@/hooks';

const defaultQuestion = {
  choices: [] as SurveyPollChoiceQuestion['choices'],
};

export const useQuestionResults = (
  { choices }: Pick<SurveyPollChoiceQuestion, 'choices'> = defaultQuestion,
  results: Record<string, number> = {},
) => {
  const colors = useResultsColors();
  const total = useResultsTotal(results);
  const data = useResultsData(choices, results, total);

  return { total, data, colors };
};

const useResultsTotal = (results: Record<string, number>) =>
  Object.values(results).reduce((acc, value) => acc + value, 0);

const useResultsData = (
  choices: SurveyPollChoiceQuestion['choices'],
  results: Record<string, number>,
  total: number,
) => {
  const colors = useResultsColors();
  const { t } = useTranslation('components', { keyPrefix: 'survey' });

  if (total === 0) {
    return [
      { title: t('noVotes'), value: 1, percentage: 100, color: colors.none },
    ];
  }

  const data = choices.map(({ text, value }) => {
    const newValue = results[value] ?? 0;
    const percentage = total !== 0 ? Math.round((newValue / total) * 100) : 0;

    return {
      title: text,
      value: newValue,
      percentage,
      color: colors[value],
    };
  });
  return data;
};

const useResultsColors = () =>
  ({
    none: useColorModeToken('gray.500', 'gray.400'),
    yes: useColorModeToken('brand.500', 'brand.700'),
    no: useColorModeToken('brand.300', 'brand.500'),
  }) as Record<string, string>;
