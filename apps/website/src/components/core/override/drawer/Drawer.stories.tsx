import { Button } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import * as DrawerComponent from './Drawer.override';

const meta = {
  title: 'Core/Override',
  component: DrawerComponent.Root,
} satisfies Meta<typeof DrawerComponent.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Drawer: Story = {
  args: {
    children: 'Content',
  },

  render: () => (
    <DrawerComponent.Root placement="start">
      <DrawerComponent.Backdrop />
      <DrawerComponent.Trigger asChild>
        <Button variant="outline" size="sm">
          Open Drawer
        </Button>
      </DrawerComponent.Trigger>
      <DrawerComponent.Content>
        <DrawerComponent.Header>
          <DrawerComponent.Title>Drawer Title</DrawerComponent.Title>
        </DrawerComponent.Header>
        <DrawerComponent.Body>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </DrawerComponent.Body>
        <DrawerComponent.CloseTrigger />
      </DrawerComponent.Content>
    </DrawerComponent.Root>
  ),
};
