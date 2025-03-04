import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { HeaderMenuTrigger as HeaderMenuTriggerComponent } from './HeaderMenuTrigger';

const meta = {
  title: 'Features/Header/BelowLg/Parts',
  component: HeaderMenuTriggerComponent,
  args: {
    open: false,
    onOpen: fn(),
  },
  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },
} satisfies Meta<typeof HeaderMenuTriggerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuTrigger: Story = {};
