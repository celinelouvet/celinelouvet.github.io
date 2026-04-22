import { Box, Grid, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from 'src/components/core';
import { type Education } from 'src/data';

import { EducationContent } from './EducationContent';

export type EducationsProps = {
  educations: Education[];
};

export const Educations: React.FC<EducationsProps> = function Educations({
  educations,
}) {
  const { t } = useTranslation('resume', { keyPrefix: 'educations' });

  return (
    <Stack id="educations" gap="4" _print={{ breakInside: 'avoid' }}>
      <H2Heading>{t('title')}</H2Heading>

      <Grid
        gridTemplateColumns={{
          base: `100%`,
          _print: `1fr 1fr`,
        }}
        gap="6"
      >
        {educations.map((education) => (
          <Box key={education.school}>
            <EducationContent education={education} />
          </Box>
        ))}
      </Grid>
    </Stack>
  );
};
