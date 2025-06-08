import { Box, Stack } from '@chakra-ui/react';
import type * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import type { Resume, Volunteering } from '@/data';

import { VolunteeringDetails } from './parts';

type VolunteeringWorksProps = {
  resume: Pick<Resume, 'volunteering'>;
};

export const VolunteeringWorks: React.FC<VolunteeringWorksProps> =
  function VolunteeringWorks({ resume }) {
    const { t } = useTranslation('home', { keyPrefix: 'volunteering' });

    const { volunteering } = resume;

    if (volunteering.length === 0) {
      return null;
    }

    return (
      <Box>
        <H2Heading>{t('title')}</H2Heading>

        <Stack gap="6">
          {volunteering.map((volunteering) => (
            <VolunteeringDetails
              key={key(volunteering)}
              volunteering={volunteering}
            />
          ))}
        </Stack>
      </Box>
    );
  };

function key({ name, from }: Volunteering) {
  return `${name}-${from}`;
}
