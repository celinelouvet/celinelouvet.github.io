import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import { type SurveyPollChoiceQuestion } from '@repo/models';
import { useTranslation } from 'react-i18next';

import { SurveyResultsBreakdown } from '@/components/core';
import { useQuestionResults } from '@/components/core/survey/surveyResults/useQuestionResults';
import { SlideContent, SlideContentTypes } from '@/components/slide';

import { SurveyResultsPie } from './SurveyResultsPie';

type SurveyResultsChoiceProps = {
  question?: SurveyPollChoiceQuestion;
  results?: Record<string, number>;
  currentIndex: number;
  questionCount: number;
};

export const SurveyResultsChoice: React.FC<SurveyResultsChoiceProps> = ({
  question,
  results,
  currentIndex,
  questionCount,
}) => {
  const { t } = useTranslation('components', { keyPrefix: 'survey' });

  const { total } = useQuestionResults(question, results);

  if (!question) return null;
  if (!results) return null;

  const { title } = question;
  return (
    <SlideContent
      type={SlideContentTypes.titleWithContent}
      title={`${currentIndex + 1}/${questionCount} — ${title}`}
    >
      <HStack width="100%" height="100%" alignItems="center" gap="10%">
        <Box width="45%" height="100%">
          <SurveyResultsPie question={question} results={results} />
        </Box>

        <Stack width="45%" height="100%" justifyContent="center" gap="2em">
          <Flex flexDirection="row" gap="1em" fontSize="1.25em">
            <Text fontWeight="700">{t('allVotes')}</Text>
            <Text>{total}</Text>
          </Flex>

          <SurveyResultsBreakdown question={question} results={results} />
        </Stack>
      </HStack>
    </SlideContent>
  );
};
