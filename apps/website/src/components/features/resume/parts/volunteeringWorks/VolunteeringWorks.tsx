import { Box, Grid, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type Volunteering } from '@/data';

import { VolunteeringContent } from './VolunteeringContent';

export type VolunteeringWorksProps = {
  volunteeringWorks: Volunteering[];
};

export const VolunteeringWorks: React.FC<VolunteeringWorksProps> =
  function VolunteeringWorks({ volunteeringWorks }) {
    const { t } = useTranslation('resume', { keyPrefix: 'volunteering' });

    return (
      <Stack id="volunteering" gap="4" _print={{ breakInside: 'avoid' }}>
        <H2Heading>{t('title')}</H2Heading>

        <Grid
          gridTemplateColumns={{
            base: `100%`,
            _print: `1fr 1fr`,
          }}
          gap="6"
        >
          {volunteeringWorks.map((volunteering) => (
            <Box key={volunteering.name}>
              <VolunteeringContent volunteering={volunteering} />
            </Box>
          ))}
        </Grid>
      </Stack>
    );
  };
