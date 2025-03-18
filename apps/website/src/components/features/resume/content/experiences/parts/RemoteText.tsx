import { Box, chakra } from '@chakra-ui/react';
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
    <chakra.span
      fontSize={size}
      fontFamily="Nunito"
      color={{ base: 'brand.300', _dark: 'brand.700' }}
    >
      <Box display={{ base: 'none', md: 'inline' }}>
        <chakra.span marginRight="2">—</chakra.span>
      </Box>
      <chakra.span>{t(remote)}</chakra.span>
    </chakra.span>
  );
};
