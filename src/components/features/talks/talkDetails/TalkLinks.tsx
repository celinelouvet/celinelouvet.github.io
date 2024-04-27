import { Button, ButtonGroup, Link } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type Links } from '@/data';

export const TalkLinks: FC<{ links: Links }> = ({ links }) => {
  const { t } = useTranslation('components', { keyPrefix: 'talkDetails' });

  const { audio, video, program } = links;
  return (
    <ButtonGroup variant="solid" size="sm" spacing="4">
      {program ? (
        <Button as={Link} href={program} isExternal>
          {t('program')}
        </Button>
      ) : null}

      {video ? (
        <Button as={Link} href={video} isExternal>
          {t('video')}
        </Button>
      ) : null}

      {audio ? (
        <Button as={Link} href={audio} isExternal>
          {t('audio')}
        </Button>
      ) : null}
    </ButtonGroup>
  );
};
