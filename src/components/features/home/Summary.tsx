import { Box, Stack } from '@chakra-ui/react';
import { type FC } from 'react';

import { Picture } from '@/components/media';
import { H1Heading, H2Heading } from '@/components/typography';
import { type Resume } from '@/data';

export type SummaryProps = {
  resume: Resume;
};

export const Summary: FC<SummaryProps> = ({ resume }) => {
  const fullname = `${resume.firstname} ${resume.lastname}`;

  return (
    <Stack alignItems={'center'} spacing={6}>
      <Picture size="lg" />

      <Box textAlign={'center'}>
        <H1Heading>{fullname}</H1Heading>
        <H2Heading>{resume.title}</H2Heading>
      </Box>
    </Stack>
  );
};
