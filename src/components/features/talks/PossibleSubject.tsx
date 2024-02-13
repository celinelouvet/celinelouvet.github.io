import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BsChevronContract, BsChevronExpand } from 'react-icons/bs';

import { H2Heading } from '@/components/typography';
import { type TalkSubject } from '@/data';

export type PossibleSubjectProps = {
  subject: TalkSubject;
};

export const PossibleSubject: FC<PossibleSubjectProps> = ({ subject }) => {
  const { topic, descriptions = [] } = subject;

  return (
    <>
      <Card size="sm" variant="filled">
        <CardHeader>
          <H2Heading>{topic}</H2Heading>
        </CardHeader>

        <CardBody>
          <Descriptions descriptions={descriptions} />
        </CardBody>
      </Card>
    </>
  );
};

const Descriptions: FC<{ descriptions: string[] }> = ({ descriptions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (descriptions.length === 0) {
    return null;
  }

  const [firstLine, ...rest] = descriptions;

  return (
    <Stack>
      <Text>{firstLine}</Text>
      {isOpen
        ? rest.map((line, index) => <Text key={index}>{line}</Text>)
        : null}
      <Box>
        {!isOpen && rest.length > 0 ? <ShowMore onOpen={onOpen} /> : null}
        {isOpen ? <ShowLess onClose={onClose} /> : null}
      </Box>
    </Stack>
  );
};

const ShowMore: FC<{ onOpen: () => void }> = ({ onOpen }) => {
  const { t } = useTranslation('components', { keyPrefix: 'talkDetails' });

  return (
    <Button
      onClick={onOpen}
      rightIcon={<BsChevronExpand />}
      variant={'outline'}
      size="sm"
    >
      {t('more')}
    </Button>
  );
};
const ShowLess: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { t } = useTranslation('components', { keyPrefix: 'talkDetails' });

  return (
    <Button
      onClick={onClose}
      rightIcon={<BsChevronContract />}
      variant={'outline'}
      size="sm"
    >
      {t('less')}
    </Button>
  );
};
