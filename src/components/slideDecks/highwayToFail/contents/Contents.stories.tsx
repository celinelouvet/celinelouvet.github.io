import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck } from '@/components/core';

import AbstractSlide from './Abstract';
import EndTitleSlide from './EndTitle';
import IntroductionSlide from './Introduction';
import MainTitleSlide from './MainTitle';
import PromotionLyonCraftSlide from './PromotionLyonCraft';
import SurveySectionTitleSlide from './SurveySectionTitle';

const meta = {
  title: 'Talks/HighwayToFail',
  component: SlideDeck,
} satisfies Meta<typeof SlideDeck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Abstract: Story = {
  args: {
    slides: [AbstractSlide],
  },
};

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

export const SurveySectionTitle: Story = {
  args: {
    slides: [SurveySectionTitleSlide],
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
