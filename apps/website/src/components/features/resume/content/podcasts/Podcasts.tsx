import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type Resume } from '@/data';
import { useHeadingSize } from '@/hooks';

import { PodcastDetails } from './PodcastDetails';

export type PodcastsProps = {
  resume: Resume;
};

export const Podcasts: React.FC<PodcastsProps> = ({ resume }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'podcasts' });

  const { podcasts } = resume;

  const sortedPodcasts = React.useMemo(() => {
    return [...podcasts].sort((a, b) => {
      const aDate = new Date(a.when);
      const bDate = new Date(b.when);
      return bDate.getTime() - aDate.getTime();
    });
  }, [podcasts]);

  return (
    <Stack>
      <H2Heading size={size}>{t('title')}</H2Heading>

      <Stack gap="8">
        {sortedPodcasts.map((podcast) => (
          <Box key={podcast.name}>
            <PodcastDetails podcast={podcast} />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
