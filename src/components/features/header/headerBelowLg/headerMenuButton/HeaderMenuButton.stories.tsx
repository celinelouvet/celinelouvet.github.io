import { type Meta, type StoryObj } from '@storybook/react';

import { HeaderMenuButton as HeaderMenuButtonComponent } from './HeaderMenuButton';

const meta = {
  title: 'Features/Header',
  component: HeaderMenuButtonComponent,
  args: {
    isOpen: false,
  },
} satisfies Meta<typeof HeaderMenuButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderMenuButton: Story = {};
