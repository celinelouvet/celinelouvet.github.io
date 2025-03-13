import { Box, List } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type Remote } from '@/data';
import { useHeadingSize } from '@/hooks';

export type RemotesProps = {
  remotes: Remote[];
};

export const Remotes: React.FC<RemotesProps> = ({ remotes }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'remote' });

  return (
    <Box>
      <H2Heading size={size}>{t('title')}</H2Heading>

      <List.Root gap="1" listStyleType="none">
        {remotes.map(({ type, where }, index) => (
          <List.Item key={index}>
            {t(`remoteType.${type}`, { location: where })}
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
};
