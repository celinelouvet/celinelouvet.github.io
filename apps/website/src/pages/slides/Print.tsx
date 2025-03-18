import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { useParams } from 'react-router';

import { Print } from '@/components/features';

export const SlidesPrintPage: React.FC = () => {
  const { talkSubjectId } = useParams();
  console.log(talkSubjectId);

  return (
    <Box backgroundColor="gray.900">
      <Print />
    </Box>
  );
};
