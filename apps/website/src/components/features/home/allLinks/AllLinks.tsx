import { Button, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from '@/components/core';
import { type Links } from '@/data';

export const AllLinks: React.FC<{ links?: Links }> = ({ links = {} }) => {
  const { t } = useTranslation('home', { keyPrefix: 'links' });

  const { audio, video, program } = links;
  return (
    <Stack gap="2" justifyContent="center">
      {program ? (
        <Button asChild variant="solid-link" size="sm">
          <Link.External href={program}>{t('program')}</Link.External>
        </Button>
      ) : null}

      {video ? (
        <Button asChild variant="solid-link" size="sm">
          <Link.External href={video}>{t('video')}</Link.External>
        </Button>
      ) : null}

      {audio ? (
        <Button asChild variant="solid-link" size="sm">
          <Link.External href={audio}>{t('audio')}</Link.External>
        </Button>
      ) : null}
    </Stack>
  );
};
