import { Box, Button, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type ConventionTalk, type Resume } from '@/data';
import { useLogger, useSortByConventions } from '@/hooks';

import { TalkDetails } from '../talkDetails';

const TALKS_TO_SEE = 2;

const key = ({ subjectId, conventionId }: ConventionTalk) => {
  return `${subjectId}-${conventionId}`;
};

const TalkList: FC<{ talks: ConventionTalk[]; title: string }> = ({
  talks,
  title,
}) => {
  const { log } = useLogger();
  const { t } = useTranslation('home', { keyPrefix: 'talks' });

  if (talks.length === 0) {
    return null;
  }

  return (
    <Box>
      <H2Heading>{title}</H2Heading>

      <Stack spacing="6">
        {talks.slice(0, TALKS_TO_SEE).map((talk) => (
          <TalkDetails key={key(talk)} talk={talk} />
        ))}

        <Button
          as={NextLink}
          href="/talks"
          variant="link"
          onClick={() => log('See talks')}
        >
          {t('seeAllTalks')}
        </Button>
      </Stack>
    </Box>
  );
};

export type TalksProps = {
  resume: Resume;
};

export const Talks: FC<TalksProps> = ({ resume }) => {
  const { alreadyDoneTalks, comingTalks } = useSortByConventions(resume);
  const { t } = useTranslation('home', { keyPrefix: 'talks' });

  return (
    <>
      <TalkList talks={comingTalks} title={t('toCome')} />
      <TalkList talks={alreadyDoneTalks} title={t('alreadyDone')} />
    </>
  );
};
