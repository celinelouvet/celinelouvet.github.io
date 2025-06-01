import { Box, Center, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading, Link } from '@/components/core';
import { type ConventionWithTalks, type Resume } from '@/data';
import { useLogger } from '@/hooks';
import { useGroupByConventions } from '@/hooks/useSortByConventions.hook';

import { ConventionDetails } from './ConventionDetails';

const key = ({ name, start }: ConventionWithTalks) => `${name}-${start}`;

type ConventionListProps = {
  conventions: ConventionWithTalks[];
  title: string;
  maxShow: number;
};

const ConventionList: React.FC<ConventionListProps> = ({
  conventions,
  title,
  maxShow,
}) => {
  const { log } = useLogger();
  const { t } = useTranslation('home', { keyPrefix: 'talks' });

  if (conventions.length === 0) {
    return null;
  }

  return (
    <Box>
      <H2Heading>{title}</H2Heading>

      <Stack gap="6">
        {conventions.slice(0, maxShow).map((convention) => (
          <ConventionDetails key={key(convention)} convention={convention} />
        ))}

        <Center>
          <Link.Internal
            variant="underline"
            to="/talks"
            onClick={() => log('See talks')}
          >
            {t('seeAll')}
          </Link.Internal>
        </Center>
      </Stack>
    </Box>
  );
};

export type ConventionsProps = {
  resume: Resume;
};

export const Conventions: React.FC<ConventionsProps> = ({ resume }) => {
  const { alreadyDoneConventions, comingConventions } =
    useGroupByConventions(resume);
  const { t } = useTranslation('home', { keyPrefix: 'talks' });

  return (
    <>
      <ConventionList
        conventions={comingConventions}
        title={t('toCome')}
        maxShow={5}
      />
      <ConventionList
        conventions={alreadyDoneConventions}
        title={t('alreadyDone')}
        maxShow={2}
      />
    </>
  );
};
