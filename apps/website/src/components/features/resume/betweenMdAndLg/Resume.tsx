import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';

import { type Resume } from 'src/data';

import { Content } from './Content';
import { MainTitle } from './MainTitle';
import { Summary } from './Summary';

type ResumeContentProps = {
  resume: Resume;
};

export const ResumeContent: React.FC<ResumeContentProps> =
  function ResumeContent({ resume }) {
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
