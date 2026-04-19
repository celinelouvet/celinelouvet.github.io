import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck, ViewTypes } from 'src/components/slide';

import ExampleSlides from '../example';
import IntroductionSlides from '../introduction';
import MainTitleSlides from '../mainTitle';
import { getSlides } from '../slides';
import WhySlides from '../why';

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

export const Example: Story = {
  render: () => {
    const slides = ExampleSlides;
    return <SlideDeck view={ViewTypes.printNotes} slides={slides} />;
  },
};

export const Why: Story = {
  render: () => {
    const slides = WhySlides;
    return <SlideDeck view={ViewTypes.printNotes} slides={slides} />;
  },
};
