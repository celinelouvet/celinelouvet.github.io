import { Box, Center, Link, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import { H2Heading } from '@/components/core';
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

  return (
    <Box>
      <H2Heading>{title}</H2Heading>

      <Stack gap="6">
        {podcasts.slice(0, maxShow).map((podcast) => (
          <PodcastDetails key={podcast.name} podcast={podcast} />
        ))}

        <Center>
          <Link
            as={NavLink}
            variant="underline"
            href="/talks"
            onClick={() => log('See podcasts')}
          >
            {t('seeAll')}
          </Link>
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
