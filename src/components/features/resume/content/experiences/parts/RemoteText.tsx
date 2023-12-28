import { type StyleConfig, Text, useColorModeValue } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type RemoteType } from '@/data';

export type RemoteTextProps = {
  remote?: RemoteType;
};

export const RemoteText: FC<RemoteTextProps> = ({ remote }) => {
  const color = useColorModeValue('gray.500', 'gray.400');
  const { t } = useTranslation('resume', {
    keyPrefix: 'experiences.experience.remoteType',
  });

  if (!remote || remote === 'NONE') {
    return null;
  }

  return (
    <Text as="span" sx={css} color={color}>
      <Text as="span" marginRight={'2'}>
        —
      </Text>
      <Text as="span">{t(remote)}</Text>
    </Text>
  );
};

export const css = {
  fontFamily: 'Nunito',
  fontSize: 'xs',
} satisfies StyleConfig['baseStyle'];
