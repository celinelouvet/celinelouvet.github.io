import { type Meta, type StoryObj } from '@storybook/react';

import { HeaderMenuTitle as HeaderMenuTitleComponent } from './HeaderMenuTitle';

const meta = {
  title: 'Features/Header',
  component: HeaderMenuTitleComponent,
  args: {
    slug: 'blog',
  },
} satisfies Meta<typeof HeaderMenuTitleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderMenuTitle: Story = {};
