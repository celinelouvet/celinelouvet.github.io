import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck, ViewTypes } from '@/components/core';

import EndTitleSlide from '../EndTitle';
import IntroductionSlide from '../Introduction';
import MainTitleSlide from '../mainTitle/MainTitle';
import YeesoSlide from '../Yeeso';

const meta = {
  title: 'Talks/TheChoiceMustGoOn/Notes',
  component: SlideDeck,
} satisfies Meta<typeof SlideDeck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainTitle: Story = {
  args: {
    slides: [MainTitleSlide],
    view: ViewTypes.printNotes,
  },
};

export const Introduction: Story = {
  args: {
    slides: [IntroductionSlide, YeesoSlide],
    view: ViewTypes.printNotes,
  },
};

export const EndTitle: Story = {
  args: {
    slides: [EndTitleSlide],
    view: ViewTypes.printNotes,
  },
};
