import { Box, Center, Stack } from '@chakra-ui/react';
import { compareDesc } from 'date-fns';
import type * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading, Link } from 'src/components/core';
import type { Podcast } from 'src/data';
import { useLogger } from 'src/hooks';

import { PodcastDetails } from './parts';

type PodcastListProps = {
  podcasts: Podcast[];
  title: string;
  maxShow: number;
};

export const PodcastList: React.FC<PodcastListProps> = function PodcastList({
  podcasts,
  title,
  maxShow,
}) {
  const { log } = useLogger();
  const { t } = useTranslation('home', { keyPrefix: 'podcasts' });

  if (podcasts.length === 0) {
    return null;
  }

  const sortedPodcasts = [...podcasts].sort((p1, p2) =>
    compareDesc(p1.when, p2.when),
  );

  return (
    <Box>
      <H2Heading>{title}</H2Heading>

      <Stack gap="6">
        {sortedPodcasts.slice(0, maxShow).map((podcast) => (
          <PodcastDetails key={podcast.name} podcast={podcast} />
        ))}

        <Center>
          <Link.Internal
            variant="underline"
            to="/talks"
            onClick={() => log('See podcasts')}
          >
            {t('seeAll')}
          </Link.Internal>
        </Center>
      </Stack>
    </Box>
  );
};
