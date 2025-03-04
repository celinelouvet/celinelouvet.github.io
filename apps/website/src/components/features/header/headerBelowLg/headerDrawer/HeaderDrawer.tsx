import { Drawer, Flex, Portal, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { CloseButton } from '@/components/core';

import { sections } from '../../sections';
import { HeaderDrawerButton } from '../headerDrawerButton';

type HeaderDrawerProps = {
  title: string;
  open: boolean;
  onClose: () => void;
};

export const HeaderDrawer: React.FC<HeaderDrawerProps> = ({
  title,
  open,
  onClose,
}) => {
  return (
    <Drawer.Root
      onOpenChange={onClose}
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
                <Text fontSize="3xl" flexGrow={1} as="span">
                  {title}
                </Text>

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
