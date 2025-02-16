import { Drawer as ChakraDrawer, Portal } from '@chakra-ui/react';
import * as React from 'react';

import { CloseButton } from '../closeButton';

interface ContentProps extends ChakraDrawer.ContentProps {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  offset?: ChakraDrawer.ContentProps['padding'];
}

export const Content = React.forwardRef<HTMLDivElement, ContentProps>(
  function DrawerContent(props, ref) {
    const { children, portalled = true, portalRef, offset, ...rest } = props;
    return (
      <Portal disabled={!portalled} container={portalRef}>
        <ChakraDrawer.Positioner padding={offset}>
          <ChakraDrawer.Content ref={ref} {...rest} asChild={false}>
            {children}
          </ChakraDrawer.Content>
        </ChakraDrawer.Positioner>
      </Portal>
    );
  },
);

export const CloseTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraDrawer.CloseTriggerProps
>(function DrawerCloseTrigger(props, ref) {
  return (
    <ChakraDrawer.CloseTrigger
      position="absolute"
      top="2"
      insetEnd="2"
      {...props}
      asChild
    >
      <CloseButton size="sm" ref={ref} />
    </ChakraDrawer.CloseTrigger>
  );
});

export const ActionTrigger = ChakraDrawer.ActionTrigger;
export const Backdrop = ChakraDrawer.Backdrop;
export const Body = ChakraDrawer.Body;
export const Description = ChakraDrawer.Description;
export const Footer = ChakraDrawer.Footer;
export const Header = ChakraDrawer.Header;
export const Root = ChakraDrawer.Root;
export const Title = ChakraDrawer.Title;
export const Trigger = ChakraDrawer.Trigger;
