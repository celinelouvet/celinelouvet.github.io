import { Spinner, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

export const Loading: React.FC = function Loading() {
  const { t } = useTranslation('common');

  return (
    <Stack
      width="100%"
      height="80vh"
      gap="8"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner
        color="brand.500"
        animationDuration="0.8s"
        borderWidth="6px"
        css={{ '--spinner-size': 'sizes.20' }}
      />
      <Text fontSize="xl">{t('loading')}</Text>
    </Stack>
  );
};
