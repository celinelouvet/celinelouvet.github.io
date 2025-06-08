import { Drawer, Flex, Portal, Stack, chakra } from '@chakra-ui/react';
import * as React from 'react';

import { CloseButton } from '@/components/core';

import { sections } from '../../sections';
import { HeaderDrawerButton } from '../headerDrawerButton';

type HeaderDrawerProps = {
  title: string;
  open: boolean;
  toggle: () => void;
};

export const HeaderDrawer: React.FC<HeaderDrawerProps> = function HeaderDrawer({
  title,
  open,
  toggle,
}) {
  return (
    <Drawer.Root
      onOpenChange={() => toggle()}
      open={open}
      size="full"
      placement="start"
    >
      <Drawer.Backdrop />

      <Portal>
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Flex justifyContent="space-between" alignItems="center">
                <chakra.span fontSize="3xl" flexGrow={1}>
                  {title}
                </chakra.span>

                <Drawer.CloseTrigger asChild>
                  <CloseButton />
                </Drawer.CloseTrigger>
              </Flex>
            </Drawer.Header>

            <Drawer.Body>
              <Stack gap="2">
                {sections.map((section) => (
                  <HeaderDrawerButton key={section.slug} section={section} />
                ))}
              </Stack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
