import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { useParams } from 'react-router';

import { PrintNotes } from '@/components/features';

export const SlidesPrintNotesPage: React.FC = () => {
  const { talkSubjectId } = useParams();

  return (
    <Box backgroundColor="gray.900" color="white">
      <PrintNotes talkSubjectId={talkSubjectId} />
    </Box>
  );
};
