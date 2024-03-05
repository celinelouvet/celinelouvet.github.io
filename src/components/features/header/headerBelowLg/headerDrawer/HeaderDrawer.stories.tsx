import { type Meta, type StoryObj } from '@storybook/react';

import { HeaderDrawer as HeaderDrawerComponent } from './HeaderDrawer';

const meta = {
  title: 'Features/Header',
  component: HeaderDrawerComponent,
  args: {
    fullname: 'John Doe',
    isOpen: true,
  },
} satisfies Meta<typeof HeaderDrawerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderDrawer: Story = {};
