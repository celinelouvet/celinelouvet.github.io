import {
  Collapsible,
  type CollapsibleRootProps,
  useCollapsible,
} from '@chakra-ui/react';
import * as React from 'react';

import { useLogger } from '@/hooks';

import { CollapsibleTrigger } from './CollapsibleTrigger';

const hasContent = (children?: React.ReactNode) => {
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

type MoreLessCollapsibleProps = CollapsibleRootProps &
  React.PropsWithChildren<{
    shown?: boolean;
    logMetadata?: Record<string, string | boolean | null | undefined>;
  }>;

export const MoreLessCollapsible: React.FC<MoreLessCollapsibleProps> = ({
  children,
  shown = true,
  logMetadata = {},
  ...props
}) => {
  const { log } = useLogger();

  const collapsible = useCollapsible({
    defaultOpen: false,
    lazyMount: true,
    onOpenChange: async ({ open }) => {
      const content = { newState: open ? 'Open' : 'Close', ...logMetadata };
      await log('Collapsible', content);
    },
  });

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
