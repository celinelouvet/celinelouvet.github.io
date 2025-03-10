import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type Resume } from '@/data';
import { useHeadingSize, useTalkSubjects } from '@/hooks';

import { TalkContent } from './TalkContent';

export type TalksProps = {
  resume: Resume;
};

export const Talks: React.FC<TalksProps> = ({ resume }) => {
  const size = useHeadingSize();
  const talkSubjects = useTalkSubjects(resume);
  const { t } = useTranslation('resume', { keyPrefix: 'talks' });

  return (
    <Stack>
      <H2Heading size={size}>{t('title')}</H2Heading>

      <Stack gap="8">
        {talkSubjects.map((talk) => (
          <Box key={talk.subjectId}>
            <TalkContent talk={talk} />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
