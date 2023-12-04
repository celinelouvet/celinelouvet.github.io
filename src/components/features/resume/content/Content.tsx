import { Stack } from '@chakra-ui/react';
import { type FC } from 'react';

import { type Resume } from '@/data';

import { PdfDownloader } from '../parts';

type ContentProps = {
  resume: Resume;
};

export const Content: FC<ContentProps> = ({ resume }) => {
  return (
    <Stack spacing={4} padding={6}>
      <Stack direction={'row-reverse'} spacing={4}>
        <PdfDownloader />
      </Stack>
    </Stack>
  );
};
