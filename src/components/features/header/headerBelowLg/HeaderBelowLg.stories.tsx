import { DarkMode, LightMode, Stack, StackItem } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { HeaderBelowLg as HeaderBelowLgComponent } from './HeaderBelowLg';

const meta = {
  title: 'Features/Header',
  component: HeaderBelowLgComponent,
} satisfies Meta<typeof HeaderBelowLgComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderBelowLg: Story = {
  render: () => (
    <Stack direction={'row'}>
      <StackItem>
        <DarkMode>
          <HeaderBelowLgComponent />
        </DarkMode>
      </StackItem>

      <StackItem>
        <LightMode>
          <HeaderBelowLgComponent />
        </LightMode>
      </StackItem>
    </Stack>
  ),
};
