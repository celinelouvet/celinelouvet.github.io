import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type Links } from '@/data';

import { type TalkProps } from './TalkDetails';

const ShowMore: FC<{ onOpen: () => void }> = ({ onOpen }) => {
  const { t } = useTranslation('components', { keyPrefix: 'talkDetails' });

  return (
    <Button onClick={onOpen} size="xs">
      {t('more')}
    </Button>
  );
};
const ShowLess: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { t } = useTranslation('components', { keyPrefix: 'talkDetails' });

  return (
    <Button onClick={onClose} size="xs">
      {t('less')}
    </Button>
  );
};

const TalkLinks: FC<{ links: Links }> = ({ links }) => {
  const { t } = useTranslation('components', { keyPrefix: 'talkDetails' });

  const { audio, slides, video, program } = links;
  return (
    <ButtonGroup variant="solid" size="xs" spacing={4}>
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  const color = useColorModeValue('gray.600', 'blanc');

  if (descriptions.length === 0) {
    return null;
  }

  const [firstLine, ...rest] = descriptions;

  return (
    <>
      <Grid gridTemplateRows={'auto 2em 2em'} gap={2}>
        <GridItem>
          <Stack fontSize="xs" color={color}>
            <Text>{firstLine}</Text>

            {isOpen
              ? rest.map((line, index) => <Text key={index}>{line}</Text>)
              : null}
          </Stack>
        </GridItem>
        <GridItem>
          {!isOpen && rest.length > 0 ? <ShowMore onOpen={onOpen} /> : null}
          {isOpen ? <ShowLess onClose={onClose} /> : null}
        </GridItem>
        <GridItem>
          <TalkLinks links={talk.links ?? {}} />
        </GridItem>
      </Grid>
    </>
  );
};
