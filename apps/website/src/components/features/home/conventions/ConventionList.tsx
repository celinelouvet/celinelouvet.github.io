import { Box, Center, Stack } from '@chakra-ui/react';
import type * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading, Link } from 'src/components/core';
import type { ConventionWithTalks } from 'src/data';
import { useLogger } from 'src/hooks';

import { ConventionDetails } from './parts';

type ConventionListProps = {
  conventions: ConventionWithTalks[];
  title: string;
  maxShow: number;
};

export const ConventionList: React.FC<ConventionListProps> =
  function ConventionList({ conventions, title, maxShow }) {
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

function key({ name, start }: ConventionWithTalks) {
  return `${name}-${start}`;
}
