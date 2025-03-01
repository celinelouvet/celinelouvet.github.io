import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { HeaderDrawer as HeaderDrawerComponent } from './HeaderDrawer';

const meta = {
  title: 'Features/Header/BelowLg/Parts',
  component: HeaderDrawerComponent,
  args: {
    title: 'Céline Louvet',
    open: true,
    onClose: fn(),
  },
  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },
} satisfies Meta<typeof HeaderDrawerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Menu: Story = {};
