import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { useParams } from 'react-router';

import { Notes } from '@/components/features';

export const SlidesNotesPage: React.FC = () => {
  const { talkSubjectId } = useParams();

  return (
    <Box
      top="0"
      left="0"
      right="0"
      bottom="0"
      position="absolute"
      backgroundColor="brand.900"
      color="white"
    >
      <Notes talkSubjectId={talkSubjectId} />
    </Box>
  );
};
