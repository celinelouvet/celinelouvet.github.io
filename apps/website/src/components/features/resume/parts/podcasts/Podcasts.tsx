import { Box, Grid, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type Resume } from '@/data';

import { PodcastDetails } from './PodcastDetails';

export type PodcastsProps = {
  resume: Resume;
};

export const Podcasts: React.FC<PodcastsProps> = function Podcasts({ resume }) {
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
    <Stack gap="4" _print={{ breakInside: 'avoid' }}>
      <H2Heading>{t('title')}</H2Heading>

      <Grid
        gridTemplateColumns={{
          base: `100%`,
          _print: `1fr 1fr`,
        }}
        gap="6"
      >
        {sortedPodcasts.map((podcast) => (
          <Box key={podcast.name}>
            <PodcastDetails podcast={podcast} />
          </Box>
        ))}
      </Grid>
    </Stack>
  );
};
