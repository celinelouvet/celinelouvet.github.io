import { Box, Stack, Text } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { useHeadingSize } from '@/hooks';

export type DescriptionProps = {
  descriptions: string[];
};

export const Description: FC<DescriptionProps> = ({ descriptions }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'description' });

  return (
    <Stack>
      <H2Heading size={size}>{t('title')}</H2Heading>

      <Box>
        {descriptions.map((description, index) => (
          <Text key={index}>{description}</Text>
        ))}
      </Box>
    </Stack>
  );
};
