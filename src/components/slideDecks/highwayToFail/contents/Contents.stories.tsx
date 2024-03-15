import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck } from '@/components/core';

import { content as MainTitleContent } from './MainTitle';

const meta = {
  title: 'Talks/HighwayToFail',
  component: SlideDeck,
} satisfies Meta<typeof SlideDeck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainTitle: Story = {
  render: () => <SlideDeck>{MainTitleContent}</SlideDeck>,
};
