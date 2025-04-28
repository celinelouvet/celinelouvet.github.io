import { type Meta, type StoryObj } from '@storybook/react';

import { type Slide, SlideDeck, ViewTypes } from '@/components/slide';

import AfterSlides from '../contents/after';
import AfterEndSlides from '../contents/afterEnd';
import AfterSectionTitleSlide from '../contents/AfterSectionTitle';
import BeforeCCSlides from '../contents/beforeCC';
import BeforeMeSlides from '../contents/beforeMe';
import BeforeSectionTitleSlide from '../contents/BeforeSectionTitle';
import CreationContactSlides from '../contents/creationContact';
import CreationFinalSlides from '../contents/creationFinal';
import CreationIdeaSlides from '../contents/creationIdea';
import CreationMarketSlides from '../contents/creationMarket';
import CreationMeetingSlides from '../contents/creationMeeting';
import CreationSectionTitleSlide from '../contents/CreationSectionTitle';
import CreationTimelineSlides from '../contents/creationTimeline';
import DuringDauphineSlides from '../contents/duringDauphine';
import DuringEssecSlides from '../contents/duringEssec';
import DuringHaskellChoiceSlides from '../contents/duringHaskellChoice';
import DuringHaskellConsequencesSlides from '../contents/duringHaskellConsequences';
import DuringLearnHaskellSlides from '../contents/duringLearnHaskell';
import DuringPlatformSlides from '../contents/duringPlatform';
import DuringSectionTitleSlide from '../contents/DuringSectionTitle';
import DuringSeedSlides from '../contents/duringSeed';
import DuringSiteSlides from '../contents/duringSite';
import DuringSiteMvpSlides from '../contents/duringSiteMvp';
import DuringStackSlides from '../contents/duringStack';
import DuringWhereSlides from '../contents/duringWhere';
import EndTitleSlide from '../contents/EndTitle';
import FairviooSlides from '../contents/fairvioo';
import IntroductionSlide from '../contents/Introduction';
import MainTitleSlide from '../contents/MainTitle';
import NumbersSlides from '../contents/numbers';
import PrefaceSlides from '../contents/preface';
import { getSlides } from '../contents/slides';
import SurveyResultSlide from '../contents/SurveyResult';
import TimelineSlide from '../contents/Timeline';
import YeesoSlide from '../contents/Yeeso';

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
  args: {
    slides: getSlides() as Slide[],
  },
  render: () => {
    const slides = getSlides();
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const MainTitle: Story = {
  render: () => {
    const slides = [MainTitleSlide];
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const Introduction: Story = {
  render: () => {
    const slides = [IntroductionSlide, YeesoSlide];
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const Fairvioo: Story = {
  render: () => {
    const slides = FairviooSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const Preface: Story = {
  render: () => {
    const slides = PrefaceSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const Numbers: Story = {
  render: () => {
    const slides = NumbersSlides;
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

export const BeforeSectionTitle: Story = {
  render: () => {
    const slides = [BeforeSectionTitleSlide];
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const BeforeMe: Story = {
  render: () => {
    const slides = BeforeMeSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const BeforeCaptainContrat: Story = {
  render: () => {
    const slides = BeforeCCSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const CreationSectionTitle: Story = {
  render: () => {
    const slides = [CreationSectionTitleSlide];
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const CreationContact: Story = {
  render: () => {
    const slides = CreationContactSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const CreationMeeting: Story = {
  render: () => {
    const slides = CreationMeetingSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const CreationIdea: Story = {
  render: () => {
    const slides = CreationIdeaSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const CreationMarket: Story = {
  render: () => {
    const slides = CreationMarketSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const CreationTimeline: Story = {
  render: () => {
    const slides = CreationTimelineSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const CreationFinal: Story = {
  render: () => {
    const slides = CreationFinalSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const DuringSectionTitle: Story = {
  render: () => {
    const slides = [DuringSectionTitleSlide];
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const DuringWhere: Story = {
  render: () => {
    const slides = DuringWhereSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const DuringEssec: Story = {
  render: () => {
    const slides = DuringEssecSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const DuringDauphine: Story = {
  render: () => {
    const slides = DuringDauphineSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const DuringSite: Story = {
  render: () => {
    const slides = DuringSiteSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const DuringSiteMvp: Story = {
  render: () => {
    const slides = DuringSiteMvpSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const DuringPlatform: Story = {
  render: () => {
    const slides = DuringPlatformSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const DuringStack: Story = {
  render: () => {
    const slides = DuringStackSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const DuringHaskellChoice: Story = {
  render: () => {
    const slides = DuringHaskellChoiceSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const DuringLearnHaskell: Story = {
  render: () => {
    const slides = DuringLearnHaskellSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const DuringHaskellConsequences: Story = {
  render: () => {
    const slides = DuringHaskellConsequencesSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const DuringSeed: Story = {
  render: () => {
    const slides = DuringSeedSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const AfterSectionTitle: Story = {
  render: () => {
    const slides = [AfterSectionTitleSlide];
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const AfterEnd: Story = {
  render: () => {
    const slides = AfterEndSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const After: Story = {
  render: () => {
    const slides = AfterSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const EndTitle: Story = {
  render: () => {
    const slides = [EndTitleSlide];
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};
