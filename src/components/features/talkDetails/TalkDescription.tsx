import {
  Button,
  ButtonGroup,
  Link,
  Stack,
  StackItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { MoreLessCollapsible } from '@/components/core';
import { type Links } from '@/data';

import { type TalkProps } from './TalkDetails';

const TalkLinks: FC<{ links: Links }> = ({ links }) => {
  const { t } = useTranslation('components', { keyPrefix: 'talkDetails' });

  const { audio, slides, video, program } = links;
  return (
    <ButtonGroup variant="solid" size="sm" spacing={4}>
      {slides ? (
        <Button as={Link} href={slides} isExternal>
          {t('slides')}
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

      {program ? (
        <Button as={Link} href={program} isExternal>
          {t('program')}
        </Button>
      ) : null}
    </ButtonGroup>
  );
};

export const TalkDescription: FC<TalkProps> = ({ talk }) => {
  const { descriptions = [] } = talk;

  const color = useColorModeValue('gray.600', 'blanc');

  if (descriptions.length === 0) {
    return null;
  }

  const [firstLine, ...rest] = descriptions;

  return (
    <>
      <Stack spacing={4}>
        <StackItem fontSize="sm" color={color} flex={1}>
          <Text>{firstLine}</Text>

          <MoreLessCollapsible>
            {rest.map((line, index) => (
              <Text key={index}>{line}</Text>
            ))}
          </MoreLessCollapsible>
        </StackItem>

        <StackItem minHeight={'2em'}>
          <TalkLinks links={talk.links ?? {}} />
        </StackItem>
      </Stack>
    </>
  );
};
