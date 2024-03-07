import { type Meta, type StoryObj } from '@storybook/react';

import { HeaderAboveLg as HeaderAboveLgComponent } from './HeaderAboveLg';

const meta = {
  title: 'Features/Header',
  component: HeaderAboveLgComponent,
} satisfies Meta<typeof HeaderAboveLgComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderAboveLg: Story = {};
