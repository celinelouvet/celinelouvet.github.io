import {
  Collapsible,
  type CollapsibleRootProps,
  useCollapsible,
} from '@chakra-ui/react';
import { type FC, type ReactNode } from 'react';

import { useLogger } from '@/hooks';

import { CollapsibleTrigger } from './CollapsibleTrigger';

const hasContent = (children?: ReactNode) => {
  if (!children) {
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

type MoreLessCollapsibleProps = CollapsibleRootProps & {
  shown?: boolean;
  logMetadata?: Record<string, string | boolean | null | undefined>;
};

export const MoreLessCollapsible: FC<MoreLessCollapsibleProps> = ({
  children,
  shown = true,
  logMetadata = {},
  ...props
}) => {
  const collapsible = useCollapsible({
    defaultOpen: false,
    lazyMount: true,
    onOpenChange: () => {
      log('Collapsible', {
        newState: collapsible.open ? 'Open' : 'Close',
        ...logMetadata,
      });
    },
  });
  const { log } = useLogger();

  if (!hasContent(children) || !shown) {
    return null;
  }

  return (
    <>
      <Collapsible.RootProvider value={collapsible} {...props}>
        <Collapsible.Content marginBottom={2}>{children}</Collapsible.Content>

        <Collapsible.Trigger asChild minHeight="2em">
          <CollapsibleTrigger
            open={collapsible.open}
            onOpenChange={(isOpen) => {
              collapsible.setOpen(isOpen);
            }}
          />
        </Collapsible.Trigger>
      </Collapsible.RootProvider>
    </>
  );
};
