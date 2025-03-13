import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type Education } from '@/data';
import { useHeadingSize } from '@/hooks';

import { EducationContent } from './EducationContent';

export type EducationsProps = {
  educations: Education[];
};

export const Educations: React.FC<EducationsProps> = ({ educations }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'educations' });

  return (
    <Stack gap="4">
      <H2Heading size={size}>{t('title')}</H2Heading>

      <Stack gap="8">
        {educations.map((education) => (
          <Box key={education.school}>
            <EducationContent education={education} />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
