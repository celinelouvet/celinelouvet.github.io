import { Box, Stack, useToken } from '@chakra-ui/react';
import { type FC } from 'react';

import { type Resume } from '@/data';

import { Content } from './content';
import { MainTitle } from './MainTitle';
import { Summary } from './summary';

type ResumeProps = {
  resume: Resume;
};

export const ResumeBelowLg: FC<ResumeProps> = ({ resume }) => {
  const [brandGradient] = useToken('colors', ['brandGradient']);

  return (
    <Stack>
      <Box bgGradient={`linear-gradient(${brandGradient})`} padding="6">
        <MainTitle resume={resume} />
      </Box>

      <Summary resume={resume} />
      <Content resume={resume} />
    </Stack>
  );
};
