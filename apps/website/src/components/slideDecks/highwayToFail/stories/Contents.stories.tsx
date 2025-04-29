import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck, ViewTypes } from '@/components/slide';

import EndTitleSlide from '../contents/EndTitle';
import { getSlides } from '../contents/slides';
import SurveyResultSlide from '../contents/SurveyResult';
import TimelineSlide from '../contents/Timeline';

const meta = {
  title: 'Talks/HighwayToFail/Contents',
  component: SlideDeck,
  args: {
    view: ViewTypes.print,
    slides: [],
  },
} satisfies Meta<typeof SlideDeck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllSlides: Story = {
  render: () => {
    const slides = getSlides();
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const SurveyResult: Story = {
  render: () => {
    const slides = [SurveyResultSlide];
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const Timeline: Story = {
  render: () => {
    const slides = [TimelineSlide];
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const EndTitle: Story = {
  render: () => {
    const slides = [EndTitleSlide];
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};
