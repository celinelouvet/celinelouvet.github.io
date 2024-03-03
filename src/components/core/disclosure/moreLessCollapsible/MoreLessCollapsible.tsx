import {
  type BoxProps,
  Collapse,
  Stack,
  StackItem,
  useDisclosure,
} from '@chakra-ui/react';
import { type FC, type ReactNode } from 'react';

import { ShowLess } from './ShowLess';
import { ShowMore } from './ShowMore';

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
