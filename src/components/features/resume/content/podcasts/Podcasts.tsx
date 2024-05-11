import { Box, Stack } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type Resume } from '@/data';
import { useHeadingSize } from '@/hooks';

import { PodcastDetails } from './PodcastDetails';

export type PodcastsProps = {
  resume: Resume;
};

export const Podcasts: FC<PodcastsProps> = ({ resume }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'podcasts' });

  const { podcasts } = resume;

  return (
    <Stack>
      <H2Heading size={size}>{t('title')}</H2Heading>

      <Stack spacing="8">
        {podcasts.map((podcast) => (
          <Box key={podcast.name}>
            <PodcastDetails podcast={podcast} />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
