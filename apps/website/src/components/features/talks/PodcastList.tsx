import { Box, Stack } from '@chakra-ui/react';
import { compareDesc } from 'date-fns';
import * as React from 'react';

import { H2Heading } from 'src/components/core';
import { type Podcast } from 'src/data';

import { PodcastDetails } from './podcastDetails';

type PodcastListProps = {
  podcasts: Podcast[];
  title: string;
};

export const PodcastList: React.FC<PodcastListProps> = function PodcastList({
  podcasts,
  title,
}) {
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
        {sortedPodcasts.map((podcast) => (
          <PodcastDetails key={key(podcast)} podcast={podcast} />
        ))}
      </Stack>
    </Box>
  );
};

function key({ name, title }: Podcast) {
  return `${name}-${title}`;
}
