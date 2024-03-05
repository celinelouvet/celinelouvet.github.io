import { type Meta, type StoryObj } from '@storybook/react';

import { HeaderButton as HeaderButtonComponent } from './HeaderButton';

const meta = {
  title: 'Features/Header',
  component: HeaderButtonComponent,
  args: {
    section: {
      href: '/',
      slug: 'home',
    },
  },
} satisfies Meta<typeof HeaderButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderButton: Story = {};
