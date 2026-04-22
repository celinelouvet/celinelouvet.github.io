import { Box, Center, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading, Link } from 'src/components/core';
import { useLogger } from 'src/hooks';

export type BiographyProps = {
  biographies: string[];
};

export const Biography: React.FC<BiographyProps> = function Biography({
  biographies,
}) {
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
        <Link.Internal
          to="/resume"
          variant="underline"
          onClick={() => log('See full resume')}
        >
          {t('seeDetails')}
        </Link.Internal>
      </Center>
    </Stack>
  );
};
