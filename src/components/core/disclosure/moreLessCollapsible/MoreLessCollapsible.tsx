import {
  type BoxProps,
  Button,
  Collapse,
  Stack,
  StackItem,
  useDisclosure,
} from '@chakra-ui/react';
import { type FC, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { BsChevronContract, BsChevronExpand } from 'react-icons/bs';

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

const hasContent = (children?: ReactNode) => {
  if (!Boolean(children)) {
    return false;
  }

  if (Array.isArray(children)) {
    const nonEmptyChildren = children.filter((child) => Boolean(child));

    if (nonEmptyChildren.length === 0) {
      return false;
    }
  }

  return true;
};

type MoreLessCollapsibleProps = BoxProps & {
  shown?: boolean;
};

export const MoreLessCollapsible: FC<MoreLessCollapsibleProps> = ({
  children,
  shown = true,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!hasContent(children) || !shown) {
    return null;
  }

  return (
    <>
      <Stack spacing={0} {...props}>
        <StackItem flex={1}>
          <Collapse in={isOpen} animateOpacity>
            {children}
          </Collapse>
        </StackItem>

        <StackItem minHeight={'2em'}>
          {!isOpen ? <ShowMore onOpen={onOpen} /> : null}
          {isOpen ? <ShowLess onClose={onClose} /> : null}
        </StackItem>
      </Stack>
    </>
  );
};
