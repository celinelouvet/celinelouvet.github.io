import { Box, Grid, HStack, Stack, Text } from '@chakra-ui/react';
import { type FC } from 'react';

import { SlideContent, SlideContentTypes } from '@/components/core';
import { type SurveyPollChoiceQuestion } from '@/models';

import { SurveyResultsPie } from './SurveyResultsPie';
import { SurveyVotes } from './SurveyVotes';

type SurveyResultsChoiceProps = {
  question?: SurveyPollChoiceQuestion;
  results?: Record<string, number>;
};

export const SurveyResultsChoice: FC<SurveyResultsChoiceProps> = ({
  question,
  results,
}) => {
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
    <SlideContent type={SlideContentTypes.titleWithContent} title={title}>
      <HStack width="100%" height="100%" alignItems="center" gap="10%">
        <Box width="45%" height="100%">
          <SurveyResultsPie question={question} results={results} />
        </Box>
        <Stack width="45%" height="100%" justifyContent="center">
          <HStack gap="1em">
            <Text fontWeight="700">Votes exprimés :</Text>
            <Text>{total}</Text>
          </HStack>
          <Grid
            templateColumns="3em 2.5em 2em 2.5em"
            columnGap="0.5em"
            rowGap="0.5em"
            alignItems="center"
            justifyItems="start"
          >
            {data.map((result) => (
              <SurveyVotes result={result} key={result.text} />
            ))}
          </Grid>
        </Stack>
      </HStack>
    </SlideContent>
  );
};
