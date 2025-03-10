import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { type RemoteType } from '@/data';

export type RemoteTextProps = {
  remote?: RemoteType;
  size?: 'sm' | 'xs';
};

export const RemoteText: React.FC<RemoteTextProps> = ({
  remote,
  size = 'sm',
}) => {
  const { t } = useTranslation('resume', {
    keyPrefix: 'experiences.experience.remoteType',
  });

  if (!remote || remote === 'NONE') {
    return null;
  }

  return (
    <Text
      as="span"
      fontSize={size}
      fontFamily="Nunito"
      color={{ base: 'brand.300', _dark: 'brand.700' }}
    >
      <Box display={{ base: 'none', md: 'inline' }}>
        <Text as="span" marginRight="2">
          —
        </Text>
      </Box>
      <Text as="span">{t(remote)}</Text>
    </Text>
  );
};
