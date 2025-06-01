import { Box, Center, Stack } from '@chakra-ui/react';
import dayjs from 'dayjs';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading, Link } from '@/components/core';
import { type Podcast, type Resume } from '@/data';
import { useLogger } from '@/hooks';

import { PodcastDetails } from './PodcastDetails';

type PodcastListProps = {
  podcasts: Podcast[];
  title: string;
  maxShow: number;
};

const PodcastList: React.FC<PodcastListProps> = ({
  podcasts,
  title,
  maxShow,
}) => {
  const { log } = useLogger();
  const { t } = useTranslation('home', { keyPrefix: 'podcasts' });

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

export type PodcastsProps = {
  resume: Resume;
};

export const Podcasts: React.FC<PodcastsProps> = ({ resume }) => {
  const { t } = useTranslation('home', { keyPrefix: 'podcasts' });

  const { podcasts } = resume;

  return (
    <>
      <PodcastList podcasts={podcasts} title={t('title')} maxShow={2} />
    </>
  );
};
