import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck } from '@/components/core';

import { content as EndTitleContent } from './EndTitle';
import { content as IntroductionContent } from './Introduction';
import { content as MainTitleContent } from './MainTitle';
import { content as PromotionLyonCraftContent } from './PromotionLyonCraft';

const meta = {
  title: 'Talks/HighwayToFail',
  component: SlideDeck,
} satisfies Meta<typeof SlideDeck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PromotionLyonCraft: Story = {
  render: () => <SlideDeck>{PromotionLyonCraftContent}</SlideDeck>,
};

export const MainTitle: Story = {
  render: () => <SlideDeck>{MainTitleContent}</SlideDeck>,
};

export const Introduction: Story = {
  render: () => <SlideDeck>{IntroductionContent}</SlideDeck>,
};

export const EndTitle: Story = {
  render: () => <SlideDeck>{EndTitleContent}</SlideDeck>,
};
