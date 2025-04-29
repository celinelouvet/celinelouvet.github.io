import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { useParams } from 'react-router';

import { SurveyResults } from '@/components/features';

export const SlidesSurveyResultsPage: React.FC = () => {
  const { talkSubjectId, conventionId } = useParams();

  return (
    <Box
      top="0"
      left="0"
      right="0"
      bottom="0"
      position="absolute"
      backgroundColor="gray.900"
      color="white"
    >
      <SurveyResults
        talkSubjectId={talkSubjectId}
        conventionId={conventionId}
      />
    </Box>
  );
};
