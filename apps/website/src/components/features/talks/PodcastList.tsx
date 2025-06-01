import { Box, Stack } from '@chakra-ui/react';
import dayjs from 'dayjs';
import * as React from 'react';

import { H2Heading } from '@/components/core';
import { type Podcast } from '@/data';

import { PodcastDetails } from './podcastDetails';

type PodcastListProps = {
  podcasts: Podcast[];
  title: string;
};

const key = ({ name, title }: Podcast) => `${name}-${title}`;

export const PodcastList: React.FC<PodcastListProps> = ({
  podcasts,
  title,
}) => {
  if (podcasts.length === 0) {
    return null;
  }

  const sortedPodcasts = [...podcasts].sort((p1, p2) =>
    dayjs(p2.when).diff(dayjs(p1.when)),
  );
  return (
    <Box>
      <H2Heading>{title}</H2Heading>

      <Stack gap="6">
        {sortedPodcasts.map((podcast) => (
          <PodcastDetails key={key(podcast)} podcast={podcast} />
        ))}
      </Stack>
    </Box>
  );
};
