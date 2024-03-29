import {
  Show,
  type StyleConfig,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type RemoteType } from '@/data';

export type RemoteTextProps = {
  remote?: RemoteType;
  size?: 'sm' | 'xs';
};

export const RemoteText: FC<RemoteTextProps> = ({ remote, size = 'sm' }) => {
  const color = useColorModeValue('gray.500', 'gray.400');
  const { t } = useTranslation('resume', {
    keyPrefix: 'experiences.experience.remoteType',
  });

  if (!remote || remote === 'NONE') {
    return null;
  }

  return (
    <Text as="span" fontSize={size} sx={css} color={color}>
      <Show above="md">
        <Text as="span" marginRight="2">
          —
        </Text>
      </Show>
      <Text as="span">{t(remote)}</Text>
    </Text>
  );
};

export const css = {
  fontFamily: 'Nunito',
} satisfies StyleConfig['baseStyle'];
