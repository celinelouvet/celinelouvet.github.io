import { Box, Button, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { useLogger } from '@/hooks';

export type BiographyProps = {
  biographies: string[];
};

export const Biography: FC<BiographyProps> = ({ biographies }) => {
  const { t } = useTranslation('home', { keyPrefix: 'biography' });
  const { log } = useLogger();

  return (
    <Stack>
      <H2Heading>{t('title')}</H2Heading>

      <Box>
        {biographies.map((biography, index) => (
          <Text key={index}>{biography}</Text>
        ))}
      </Box>

      <Button
        as={NextLink}
        href="/resume"
        variant="link"
        onClick={() => log('See full resume')}
      >
        {t('seeDetails')}
      </Button>
    </Stack>
  );
};
