import { Box, List } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from 'src/components/core';
import { type Remote } from 'src/data';

export type RemotesProps = {
  remotes: Remote[];
};

export const Remotes: React.FC<RemotesProps> = function Remotes({ remotes }) {
  const { t } = useTranslation('resume', { keyPrefix: 'remote' });

  return (
    <Box>
      <H2Heading>{t('title')}</H2Heading>

      <List.Root gap="1" variant="plain">
        {remotes.map(({ type, where }, index) => (
          <List.Item key={index}>
            {t(`remoteType.${type}`, { location: where })}
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
};
