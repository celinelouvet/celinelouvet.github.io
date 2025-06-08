import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { type Resume } from '@/data';

import { Content } from './content';
import { MainTitle } from './MainTitle';
import { Summary } from './summary';

type ResumeProps = {
  resume: Resume;
};

export const ResumeBelowLg: React.FC<ResumeProps> = function ResumeBelowLg({
  resume,
}) {
  return (
    <Stack>
      <Box bgGradient="brand" padding="6">
        <MainTitle resume={resume} />
      </Box>

      <Summary resume={resume} />
      <Content resume={resume} />
    </Stack>
  );
};
