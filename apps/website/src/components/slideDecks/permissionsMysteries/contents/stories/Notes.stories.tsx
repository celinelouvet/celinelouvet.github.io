import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck, ViewTypes } from 'src/components/slide';

import IntroductionSlides from '../introduction';
import MainTitleSlides from '../mainTitle';
import { getSlides } from '../slides';

const meta = {
  title: 'Talks/PermissionsMysteries/Notes',
  component: SlideDeck,
  args: {
    view: ViewTypes.printNotes,
    slides: [],
  },
} satisfies Meta<typeof SlideDeck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllSlides: Story = {
  render: () => {
    const slides = getSlides();
    return <SlideDeck view={ViewTypes.printNotes} slides={slides} />;
  },
};

export const MainTitle: Story = {
  render: () => {
    const slides = MainTitleSlides;
    return <SlideDeck view={ViewTypes.printNotes} slides={slides} />;
  },
};

export const Introduction: Story = {
  render: () => {
    const slides = IntroductionSlides;
    return <SlideDeck view={ViewTypes.printNotes} slides={slides} />;
  },
};
