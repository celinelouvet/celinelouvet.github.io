import { Box, Center, Link, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import { H2Heading } from '@/components/core';
import { useLogger } from '@/hooks';

export type BiographyProps = {
  biographies: string[];
};

export const Biography: React.FC<BiographyProps> = ({ biographies }) => {
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

      <Center>
        <Link
          as={NavLink}
          href="/resume"
          variant="underline"
          onClick={() => log('See full resume')}
        >
          {t('seeDetails')}
        </Link>
      </Center>
    </Stack>
  );
};
