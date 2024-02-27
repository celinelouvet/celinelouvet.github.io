import { Box, List, ListItem } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading } from '@/components/core';
import { type Remote } from '@/data';
import { useHeadingSize } from '@/hooks';

export type RemotesProps = {
  remotes: Remote[];
};

export const Remotes: FC<RemotesProps> = ({ remotes }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'remote' });

  return (
    <Box>
      <H2Heading size={size}>{t('title')}</H2Heading>

      <List spacing={1}>
        {remotes.map(({ type, where }, index) => (
          <ListItem key={index}>
            {t(`remoteType.${type}`, { location: where })}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
