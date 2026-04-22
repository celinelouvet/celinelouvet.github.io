import { Box, Grid, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from 'src/components/core';
import { type Resume } from 'src/data';

import { TalkContent } from './TalkContent';
import { useTalkSubjects } from './useTalkSubjects.hook';

export type TalksProps = {
  resume: Resume;
};

export const Talks: React.FC<TalksProps> = function Talks({ resume }) {
  const talkSubjects = useTalkSubjects(resume);
  const { t } = useTranslation('resume', { keyPrefix: 'talks' });

  return (
    <Stack
      id="talks"
      gap="4"
      _print={{ breakBefore: 'page', breakInside: 'avoid' }}
    >
      <H2Heading>{t('title')}</H2Heading>

      <Grid
        gridTemplateColumns={{
          base: `100%`,
          _print: `1fr 1fr`,
        }}
        gap="6"
      >
        {talkSubjects.map((talk) => (
          <Box key={talk.subjectId}>
            <TalkContent talk={talk} />
          </Box>
        ))}
      </Grid>
    </Stack>
  );
};
