import { Box, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';

export type DescriptionProps = {
  descriptions: string[];
};

export const Description: React.FC<DescriptionProps> = function Description({
  descriptions,
}) {
  const { t } = useTranslation('resume', { keyPrefix: 'description' });

  return (
    <Stack id="descriptions" _print={{ breakAfter: 'page' }}>
      <H2Heading>{t('title')}</H2Heading>

      <Box>
        {descriptions.map((description, index) => (
          <Text key={index}>{description}</Text>
        ))}
      </Box>
    </Stack>
  );
};
