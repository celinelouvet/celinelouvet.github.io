import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { useParams } from 'react-router';

import { Print } from 'src/components/features';

export const SlidesPrintPage: React.FC = () => {
  const { talkSubjectId } = useParams();

  return (
    <Box backgroundColor="gray.900" color="white">
      <Print talkSubjectId={talkSubjectId} />
    </Box>
  );
};
