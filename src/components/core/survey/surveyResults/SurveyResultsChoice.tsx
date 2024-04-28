import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  Stack,
  type StyleConfig,
  Text,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type SurveyPollChoiceQuestion } from '@/models';

import { SurveyResultsPie } from './SurveyResultsPie';

type VoteResult = {
  text: string;
  value: number;
  percentage: number;
};

const SurveyVotes: FC<{ result: VoteResult }> = ({ result }) => {
  const { text, value, percentage } = result;
  return (
    <>
      <Text fontWeight="700" as="span">
        {text}
      </Text>
      <Text as="span">{percentage}%</Text>
      <Text as="span">→</Text>
      <Text as="span">{value}</Text>
    </>
  );
};

type SurveyResultsChoiceProps = {
  question?: SurveyPollChoiceQuestion;
  results?: Record<string, number>;
};

export const SurveyResultsChoice = forwardRef<SurveyResultsChoiceProps, 'div'>(
  ({ question, results }, ref) => {
    const styles = useStyleConfig('SurveyResultsChoice');
    const { t } = useTranslation('components', { keyPrefix: 'survey' });

    if (!question) return null;
    if (!results) return null;

    const total = Object.values(results).reduce((acc, value) => acc + value, 0);
    const data = question.choices.map(({ text, value, color }) => {
      const newValue = results[value] ?? 0;
      const percentage =
        newValue !== 0 ? Math.round((newValue / total) * 100) : 0;

      return { text, value: newValue, percentage, color };
    });

    const { title } = question;
    return (
      <Card variant="outline" ref={ref} sx={styles}>
        <CardHeader>
          <H2Heading>{title}</H2Heading>
        </CardHeader>
        <CardBody>
          <Flex
            alignItems="center"
            justifyContent="space-evenly"
            flexDirection={{
              base: 'column',
              sm: 'row',
            }}
          >
            <SurveyResultsPie question={question} results={results} />
            <Stack>
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
                {data.map((result) => (
                  <SurveyVotes result={result} key={result.text} />
                ))}
              </Grid>
            </Stack>
          </Flex>
        </CardBody>
      </Card>
    );
  }
);

export const surveyResultsChoiceStyles = {
  baseStyle: {},
} satisfies StyleConfig;
