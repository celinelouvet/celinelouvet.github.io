import { Box, Grid, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from 'src/components/core';
import { type Certification } from 'src/data';

import { CertificationContent } from './CertificationContent';

export type CertificationsProps = {
  certifications: Certification[];
};

export const Certifications: React.FC<CertificationsProps> =
  function Certifications({ certifications }) {
    const { t } = useTranslation('resume', { keyPrefix: 'certifications' });

    return (
      <Stack id="certifications" gap="4" _print={{ breakInside: 'avoid' }}>
        <H2Heading>{t('title')}</H2Heading>

        <Grid
          gridTemplateColumns={{
            base: `100%`,
            _print: `1fr 1fr`,
          }}
          gap="6"
        >
          {certifications.map((certification) => (
            <Box key={certification.topic}>
              <CertificationContent certification={certification} />
            </Box>
          ))}
        </Grid>
      </Stack>
    );
  };
