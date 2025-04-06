import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck, ViewTypes } from '@/components/slide';

import AfterSlides from '../after';
import AfterEndSlides from '../afterEnd';
import AfterSectionTitleSlide from '../AfterSectionTitle';
import BeforeCCSlides from '../beforeCC';
import BeforeMeSlides from '../beforeMe';
import BeforeSectionTitleSlide from '../BeforeSectionTitle';
import CreationContactSlides from '../creationContact';
import CreationFinalSlides from '../creationFinal';
import CreationIdeaSlides from '../creationIdea';
import CreationMarketSlides from '../creationMarket';
import CreationMeetingSlides from '../creationMeeting';
import CreationSectionTitleSlide from '../CreationSectionTitle';
import CreationTimelineSlides from '../creationTimeline';
import DuringDauphineSlides from '../duringDauphine';
import DuringEssecSlides from '../duringEssec';
import DuringHaskellChoiceSlides from '../duringHaskellChoice';
import DuringHaskellConsequencesSlides from '../duringHaskellConsequences';
import DuringLearnHaskellSlides from '../duringLearnHaskell';
import DuringPlatformSlides from '../duringPlatform';
import DuringSectionTitleSlide from '../DuringSectionTitle';
import DuringSeedSlides from '../duringSeed';
import DuringSiteSlides from '../duringSite';
import DuringSiteMvpSlides from '../duringSiteMvp';
import DuringStackSlides from '../duringStack';
import DuringWhereSlides from '../duringWhere';
import EndTitleSlide from '../EndTitle';
import FairviooSlides from '../fairvioo';
import IntroductionSlide from '../Introduction';
import MainTitleSlide from '../MainTitle';
import NumbersSlides from '../numbers';
import PrefaceSlides from '../preface';
import SurveyResultSlide from '../SurveyResult';
import TimelineSlide from '../Timeline';
import YeesoSlide from '../Yeeso';

const meta = {
  title: 'Talks/HighwayToFail/Notes',
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

export const Fairvioo: Story = {
  args: {
    slides: FairviooSlides,

    view: ViewTypes.printNotes,
  },
};

export const Preface: Story = {
  args: {
    slides: PrefaceSlides,
    view: ViewTypes.printNotes,
  },
};

export const Numbers: Story = {
  args: {
    slides: NumbersSlides,
    view: ViewTypes.printNotes,
  },
};

export const SurveyResult: Story = {
  args: {
    slides: [SurveyResultSlide],
    view: ViewTypes.printNotes,
  },
};

export const Timeline: Story = {
  args: {
    slides: [TimelineSlide],
    view: ViewTypes.printNotes,
  },
};

export const BeforeSectionTitle: Story = {
  args: {
    slides: [BeforeSectionTitleSlide],
    view: ViewTypes.printNotes,
  },
};

export const BeforeMe: Story = {
  args: {
    slides: BeforeMeSlides,
    view: ViewTypes.printNotes,
  },
};

export const BeforeCaptainContrat: Story = {
  args: {
    slides: BeforeCCSlides,
    view: ViewTypes.printNotes,
  },
};

export const CreationSectionTitle: Story = {
  args: {
    slides: [CreationSectionTitleSlide],
    view: ViewTypes.printNotes,
  },
};

export const CreationContact: Story = {
  args: {
    slides: CreationContactSlides,
    view: ViewTypes.printNotes,
  },
};

export const CreationMeeting: Story = {
  args: {
    slides: CreationMeetingSlides,
    view: ViewTypes.printNotes,
  },
};

export const CreationIdea: Story = {
  args: {
    slides: CreationIdeaSlides,
    view: ViewTypes.printNotes,
  },
};

export const CreationMarket: Story = {
  args: {
    slides: CreationMarketSlides,
    view: ViewTypes.printNotes,
  },
};

export const CreationTimeline: Story = {
  args: {
    slides: CreationTimelineSlides,
    view: ViewTypes.printNotes,
  },
};

export const CreationFinal: Story = {
  args: {
    slides: CreationFinalSlides,
    view: ViewTypes.printNotes,
  },
};

export const DuringSectionTitle: Story = {
  args: {
    slides: [DuringSectionTitleSlide],
    view: ViewTypes.printNotes,
  },
};

export const DuringWhere: Story = {
  args: {
    slides: DuringWhereSlides,
    view: ViewTypes.printNotes,
  },
};

export const DuringEssec: Story = {
  args: {
    slides: DuringEssecSlides,
    view: ViewTypes.printNotes,
  },
};

export const DuringDauphine: Story = {
  args: {
    slides: DuringDauphineSlides,
    view: ViewTypes.printNotes,
  },
};

export const DuringSite: Story = {
  args: {
    slides: DuringSiteSlides,
    view: ViewTypes.printNotes,
  },
};

export const DuringSiteMvp: Story = {
  args: {
    slides: DuringSiteMvpSlides,
    view: ViewTypes.printNotes,
  },
};

export const DuringPlatform: Story = {
  args: {
    slides: DuringPlatformSlides,
    view: ViewTypes.printNotes,
  },
};

export const DuringStack: Story = {
  args: {
    slides: DuringStackSlides,
    view: ViewTypes.printNotes,
  },
};

export const DuringHaskellChoice: Story = {
  args: {
    slides: DuringHaskellChoiceSlides,
    view: ViewTypes.printNotes,
  },
};

export const DuringLearnHaskell: Story = {
  args: {
    slides: DuringLearnHaskellSlides,
    view: ViewTypes.printNotes,
  },
};

export const DuringHaskellConsequences: Story = {
  args: {
    slides: DuringHaskellConsequencesSlides,
    view: ViewTypes.printNotes,
  },
};

export const DuringSeed: Story = {
  args: {
    slides: DuringSeedSlides,
    view: ViewTypes.printNotes,
  },
};

export const AfterSectionTitle: Story = {
  args: {
    slides: [AfterSectionTitleSlide],
    view: ViewTypes.printNotes,
  },
};

export const AfterEnd: Story = {
  args: {
    slides: AfterEndSlides,
    view: ViewTypes.printNotes,
  },
};

export const After: Story = {
  args: {
    slides: AfterSlides,
    view: ViewTypes.printNotes,
  },
};

export const EndTitle: Story = {
  args: {
    slides: [EndTitleSlide],
    view: ViewTypes.printNotes,
  },
};
