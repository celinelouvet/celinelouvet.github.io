import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type Certification } from '@/data';
import { useHeadingSize } from '@/hooks';

import { CertificationContent } from './CertificationContent';

export type CertificationsProps = {
  certifications: Certification[];
};

export const Certifications: React.FC<CertificationsProps> =
  function Certifications({ certifications }) {
    const size = useHeadingSize();
    const { t } = useTranslation('resume', { keyPrefix: 'certifications' });

    return (
      <Stack gap="4">
        <H2Heading size={size}>{t('title')}</H2Heading>

        <Stack gap="8">
          {certifications.map((certification) => (
            <Box key={certification.topic}>
              <CertificationContent certification={certification} />
            </Box>
          ))}
        </Stack>
      </Stack>
    );
  };
