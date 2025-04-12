import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck, ViewTypes } from '@/components/slide';

import DefineYourObjectivesSlides from '../defineYourObjectives';
import EndTitleSlides from '../endTitle';
import IntroductionSlides from '../introduction';
import KnowYourExistingSlides from '../knowYourExisting';
import KnowYourNeedSlides from '../knowYourNeed';
import MainTitleSlides from '../mainTitle';
import PrefaceSlides from '../preface';
import ScopeYourNeedSlides from '../scopeYourNeed';
import { getSlides } from '../slides';

const meta = {
  title: 'Talks/TheChoiceMustGoOn/Contents',
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

export const MainTitle: Story = {
  render: () => {
    const slides = MainTitleSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const Preface: Story = {
  render: () => {
    const slides = PrefaceSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const KnowYourNeed: Story = {
  render: () => {
    const slides = KnowYourNeedSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const ScopeYourNeed: Story = {
  render: () => {
    const slides = ScopeYourNeedSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const DefineYourObjectives: Story = {
  render: () => {
    const slides = DefineYourObjectivesSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const KnowYourExisting: Story = {
  render: () => {
    const slides = KnowYourExistingSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const Introduction: Story = {
  render: () => {
    const slides = IntroductionSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const EndTitle: Story = {
  render: () => {
    const slides = EndTitleSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};
