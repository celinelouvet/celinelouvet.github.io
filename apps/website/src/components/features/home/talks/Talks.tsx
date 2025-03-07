import { Box, Center, Link, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import { H2Heading } from '@/components/core';
import { type ConventionTalk, type Resume } from '@/data';
import { useLogger, useSortByConventions } from '@/hooks';

import { Talk } from './Talk';

const key = ({ subjectId, conventionId }: ConventionTalk) => {
  return `${subjectId}-${conventionId}`;
};

type TalkListProps = {
  talks: ConventionTalk[];
  title: string;
  maxShow: number;
};

const TalkList: React.FC<TalkListProps> = ({ talks, title, maxShow }) => {
  const { log } = useLogger();
  const { t } = useTranslation('home', { keyPrefix: 'talks' });

  if (talks.length === 0) {
    return null;
  }

  return (
    <Box>
      <H2Heading>{title}</H2Heading>

      <Stack gap="6">
        {talks.slice(0, maxShow).map((talk) => (
          <Talk key={key(talk)} talk={talk} />
        ))}

        <Center>
          <Link
            as={NavLink}
            variant="underline"
            href="/talks"
            onClick={() => log('See talks')}
          >
            {t('seeAll')}
          </Link>
        </Center>
      </Stack>
    </Box>
  );
};

export type TalksProps = {
  resume: Resume;
};

export const Talks: React.FC<TalksProps> = ({ resume }) => {
  const { alreadyDoneTalks, comingTalks } = useSortByConventions(resume);
  const { t } = useTranslation('home', { keyPrefix: 'talks' });

  return (
    <>
      <TalkList talks={comingTalks} title={t('toCome')} maxShow={5} />
      <TalkList talks={alreadyDoneTalks} title={t('alreadyDone')} maxShow={2} />
    </>
  );
};
