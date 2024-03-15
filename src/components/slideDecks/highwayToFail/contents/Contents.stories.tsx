import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck } from '@/components/core';

import IntroductionComponent from './Introduction';
import MainTitleSlide from './MainTitle';

const meta = {
  title: 'Talks/HighwayToFail',
  component: SlideDeck,
} satisfies Meta<typeof SlideDeck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainTitle: Story = {
  args: {
    slides: [MainTitleSlide],
  },
};

export const Introduction: Story = {
  args: {
    slides: [IntroductionComponent],
  },
};
