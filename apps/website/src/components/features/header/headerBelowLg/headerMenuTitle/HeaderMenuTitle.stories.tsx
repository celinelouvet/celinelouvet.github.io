import { type Meta, type StoryObj } from '@storybook/react';

import { HeaderMenuTitle as HeaderMenuTitleComponent } from './HeaderMenuTitle';

const meta = {
  title: 'Features/Header/BelowLg/Parts',
  component: HeaderMenuTitleComponent,
  args: {
    slug: 'blog',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },
} satisfies Meta<typeof HeaderMenuTitleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuTitle: Story = {};
