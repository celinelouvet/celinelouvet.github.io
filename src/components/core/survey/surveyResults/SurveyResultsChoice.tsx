import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Stack,
  type StyleConfig,
  Text,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';

import { H2Heading } from '@/components/core';
import { type SurveyPollChoiceQuestion } from '@/models';

import { SurveyResultsPie } from './SurveyResultsPie';

type SurveyResultsChoiceProps = {
  question?: SurveyPollChoiceQuestion;
  results?: Record<string, number>;
};

export const SurveyResultsChoice = forwardRef<SurveyResultsChoiceProps, 'div'>(
  ({ question, results }, ref) => {
    const styles = useStyleConfig('SurveyResultsChoice');

    if (!question) return null;
    if (!results) return null;

    const total = Object.values(results).reduce((acc, value) => acc + value, 0);
    const data = question.choices.map(({ text, value, color }) => ({
      text,
      value: results[value] ?? 0,
      percentage: Math.round(((results[value] ?? 0) / total) * 100),
      color,
    }));

    const { title } = question;
    return (
      <Card variant="outline" ref={ref} sx={styles}>
        <CardHeader>
          <H2Heading>{title}</H2Heading>
        </CardHeader>
        <CardBody>
          <Flex alignItems="center" justifyContent="space-evenly">
            <SurveyResultsPie question={question} results={results} />
            <Stack>
              <Flex fontSize="xl" flexDirection="row">
                <Text fontWeight="700" marginRight="1em">
                  Nombre de votes:
                </Text>
                <Text>{total}</Text>
              </Flex>
              {data.map(({ text, value, percentage }) => (
                <Flex key={text} fontSize="xl" flexDirection="row" gap="1em">
                  <Text fontWeight="700" width="4em">
                    {text}
                  </Text>
                  <Text>{percentage}%</Text>
                  <Text>({value} votes)</Text>
                </Flex>
              ))}
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
