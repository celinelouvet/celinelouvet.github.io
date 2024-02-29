import { type Meta, type StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta = {
  title: 'Features/Header',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullHeader: Story = {};
