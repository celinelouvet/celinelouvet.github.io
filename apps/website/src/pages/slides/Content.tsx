import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { useParams } from 'react-router';

import { Content } from '@/components/features';

export const SlidesContentPage: React.FC = () => {
  const { talkSubjectId } = useParams();

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
      <Content talkSubjectId={talkSubjectId} />
    </Box>
  );
};
