import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck } from '@/components/core';

import EndTitleSlide from './EndTitle';
import IntroductionSlide from './Introduction';
import MainTitleSlide from './MainTitle';
import PromotionLyonCraftSlide from './PromotionLyonCraft';

const meta = {
  title: 'Talks/HighwayToFail',
  component: SlideDeck,
} satisfies Meta<typeof SlideDeck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PromotionLyonCraft: Story = {
  args: {
    slides: [PromotionLyonCraftSlide],
  },
};

export const MainTitle: Story = {
  args: {
    slides: [MainTitleSlide],
  },
};

export const Introduction: Story = {
  args: {
    slides: [IntroductionSlide],
  },
};

export const EndTitle: Story = {
  args: {
    slides: [EndTitleSlide],
  },
};
