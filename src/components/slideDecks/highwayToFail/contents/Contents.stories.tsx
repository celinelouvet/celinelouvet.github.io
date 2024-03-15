import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck } from '@/components/core';

import { content as AbstractContent } from './Abstract';
import { content as EndTitleContent } from './EndTitle';
import { content as IntroductionContent } from './Introduction';
import { content as MainTitleContent } from './MainTitle';
import { content as PromotionLyonCraftContent } from './PromotionLyonCraft';
import { content as SurveySectionTitleContent } from './SurveySectionTitle';

const meta = {
  title: 'Talks/HighwayToFail',
  component: SlideDeck,
} satisfies Meta<typeof SlideDeck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Abstract: Story = {
  render: () => <SlideDeck>{AbstractContent}</SlideDeck>,
};

export const PromotionLyonCraft: Story = {
  render: () => <SlideDeck>{PromotionLyonCraftContent}</SlideDeck>,
};

export const MainTitle: Story = {
  render: () => <SlideDeck>{MainTitleContent}</SlideDeck>,
};

export const SurveySectionTitle: Story = {
  render: () => <SlideDeck>{SurveySectionTitleContent}</SlideDeck>,
};

export const Introduction: Story = {
  render: () => <SlideDeck>{IntroductionContent}</SlideDeck>,
};

export const EndTitle: Story = {
  render: () => <SlideDeck>{EndTitleContent}</SlideDeck>,
};
