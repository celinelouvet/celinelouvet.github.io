import { Button, Link, Stack } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type Links } from '@/data';

export const AllLinks: FC<{ links?: Links }> = ({ links = {} }) => {
  const { t } = useTranslation('home', { keyPrefix: 'links' });

  const { audio, video, program } = links;
  return (
    <Stack gap="2" justifyContent="center">
      {program ? (
        <Button as={Link} href={program} variant="solid" size="sm" isExternal>
          {t('program')}
        </Button>
      ) : null}

      {video ? (
        <Button as={Link} href={video} variant="solid" size="sm" isExternal>
          {t('video')}
        </Button>
      ) : null}

      {audio ? (
        <Button as={Link} href={audio} variant="solid" size="sm" isExternal>
          {t('audio')}
        </Button>
      ) : null}
    </Stack>
  );
};
