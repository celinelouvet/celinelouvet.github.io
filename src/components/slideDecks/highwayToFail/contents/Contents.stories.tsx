import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck } from '@/components/core';

import AbstractSlide from './Abstract';
import BeforeCC1Slide from './BeforeCC1';
import BeforeCC2Slide from './BeforeCC2';
import BeforeCC3Slide from './BeforeCC3';
import BeforeCC4Slide from './BeforeCC4';
import BeforeCC5Slide from './BeforeCC5';
import BeforeMe1Slide from './BeforeMe1';
import BeforeMe2Slide from './BeforeMe2';
import BeforeMe3Slide from './BeforeMe3';
import BeforeSectionTitleSlide from './BeforeSectionTitle';
import CreationContact1Slide from './CreationContact1';
import CreationContact2Slide from './CreationContact2';
import CreationFinal1Slide from './CreationFinal1';
import CreationFinal2Slide from './CreationFinal2';
import CreationFinal3Slide from './CreationFinal3';
import CreationFinal4Slide from './CreationFinal4';
import CreationFinal5Slide from './CreationFinal5';
import CreationFinal6Slide from './CreationFinal6';
import CreationFinal7Slide from './CreationFinal7';
import CreationFinal8Slide from './CreationFinal8';
import CreationIdea1Slide from './CreationIdea1';
import CreationIdea2Slide from './CreationIdea2';
import CreationIdea3Slide from './CreationIdea3';
import CreationIdea4Slide from './CreationIdea4';
import CreationIdea5Slide from './CreationIdea5';
import CreationIdea6Slide from './CreationIdea6';
import CreationIdea7Slide from './CreationIdea7';
import CreationIdea8Slide from './CreationIdea8';
import CreationMarket1Slide from './CreationMarket1';
import CreationMarket2Slide from './CreationMarket2';
import CreationMarket3Slide from './CreationMarket3';
import CreationMarket4Slide from './CreationMarket4';
import CreationMarket5Slide from './CreationMarket5';
import CreationMarket6Slide from './CreationMarket6';
import CreationMeeting1Slide from './CreationMeeting1';
import CreationMeeting2Slide from './CreationMeeting2';
import CreationMeeting3Slide from './CreationMeeting3';
import CreationMeeting4Slide from './CreationMeeting4';
import CreationMeeting5Slide from './CreationMeeting5';
import CreationSectionTitleSlide from './CreationSectionTitle';
import CreationTimeline1Slide from './CreationTimeline1';
import CreationTimeline2Slide from './CreationTimeline2';
import CreationTimeline3Slide from './CreationTimeline3';
import CreationTimeline4Slide from './CreationTimeline4';
import DuringSectionTitleSlide from './DuringSectionTitle';
import DuringWhere1Slide from './DuringWhere1';
import DuringWhere2Slide from './DuringWhere2';
import DuringWhere3Slide from './DuringWhere3';
import EndTitleSlide from './EndTitle';
import Fairvioo1Slide from './Fairvioo1';
import Fairvioo2Slide from './Fairvioo2';
import Fairvioo3Slide from './Fairvioo3';
import Fairvioo4Slide from './Fairvioo4';
import IntroductionSlide from './Introduction';
import MainTitleSlide from './MainTitle';
import Numbers1Slide from './Numbers1';
import Numbers2Slide from './Numbers2';
import Numbers3Slide from './Numbers3';
import Numbers4Slide from './Numbers4';
import Preface1Slide from './Preface1';
import Preface2Slide from './Preface2';
import Preface3Slide from './Preface3';
import Preface4Slide from './Preface4';
import PromotionLyonCraftSlide from './PromotionLyonCraft';
import SurveySectionTitleSlide from './SurveySectionTitle';
import TimelineSlide from './Timeline';

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

export const Fairvioo1: Story = {
  args: {
    slides: [Fairvioo1Slide],
  },
};

export const Fairvioo2: Story = {
  args: {
    slides: [Fairvioo2Slide],
  },
};

export const Fairvioo3: Story = {
  args: {
    slides: [Fairvioo3Slide],
  },
};

export const Fairvioo4: Story = {
  args: {
    slides: [Fairvioo4Slide],
  },
};

export const Preface1: Story = {
  args: {
    slides: [Preface1Slide],
  },
};

export const Preface2: Story = {
  args: {
    slides: [Preface2Slide],
  },
};

export const Preface3: Story = {
  args: {
    slides: [Preface3Slide],
  },
};

export const Preface4: Story = {
  args: {
    slides: [Preface4Slide],
  },
};

export const Numbers1: Story = {
  args: {
    slides: [Numbers1Slide],
  },
};

export const Numbers2: Story = {
  args: {
    slides: [Numbers2Slide],
  },
};

export const Numbers3: Story = {
  args: {
    slides: [Numbers3Slide],
  },
};

export const Numbers4: Story = {
  args: {
    slides: [Numbers4Slide],
  },
};

export const Timeline: Story = {
  args: {
    slides: [TimelineSlide],
  },
};

export const BeforeSectionTitle: Story = {
  args: {
    slides: [BeforeSectionTitleSlide],
  },
};

export const BeforeMe1: Story = {
  args: {
    slides: [BeforeMe1Slide],
  },
};

export const BeforeMe2: Story = {
  args: {
    slides: [BeforeMe2Slide],
  },
};

export const BeforeMe3: Story = {
  args: {
    slides: [BeforeMe3Slide],
  },
};

export const BeforeCaptainContrat1: Story = {
  args: {
    slides: [BeforeCC1Slide],
  },
};

export const BeforeCaptainContrat2: Story = {
  args: {
    slides: [BeforeCC2Slide],
  },
};

export const BeforeCaptainContrat3: Story = {
  args: {
    slides: [BeforeCC3Slide],
  },
};

export const BeforeCaptainContrat4: Story = {
  args: {
    slides: [BeforeCC4Slide],
  },
};

export const BeforeCaptainContrat5: Story = {
  args: {
    slides: [BeforeCC5Slide],
  },
};

export const CreationSectionTitle: Story = {
  args: {
    slides: [CreationSectionTitleSlide],
  },
};

export const CreationContact1: Story = {
  args: {
    slides: [CreationContact1Slide],
  },
};

export const CreationContact2: Story = {
  args: {
    slides: [CreationContact2Slide],
  },
};

export const CreationMeeting1: Story = {
  args: {
    slides: [CreationMeeting1Slide],
  },
};

export const CreationMeeting2: Story = {
  args: {
    slides: [CreationMeeting2Slide],
  },
};

export const CreationMeeting3: Story = {
  args: {
    slides: [CreationMeeting3Slide],
  },
};

export const CreationMeeting4: Story = {
  args: {
    slides: [CreationMeeting4Slide],
  },
};

export const CreationMeeting5: Story = {
  args: {
    slides: [CreationMeeting5Slide],
  },
};

export const CreationIdea1: Story = {
  args: {
    slides: [CreationIdea1Slide],
  },
};

export const CreationIdea2: Story = {
  args: {
    slides: [CreationIdea2Slide],
  },
};

export const CreationIdea3: Story = {
  args: {
    slides: [CreationIdea3Slide],
  },
};

export const CreationIdea4: Story = {
  args: {
    slides: [CreationIdea4Slide],
  },
};

export const CreationIdea5: Story = {
  args: {
    slides: [CreationIdea5Slide],
  },
};

export const CreationIdea6: Story = {
  args: {
    slides: [CreationIdea6Slide],
  },
};

export const CreationIdea7: Story = {
  args: {
    slides: [CreationIdea7Slide],
  },
};

export const CreationIdea8: Story = {
  args: {
    slides: [CreationIdea8Slide],
  },
};

export const CreationMarket1: Story = {
  args: {
    slides: [CreationMarket1Slide],
  },
};

export const CreationMarket2: Story = {
  args: {
    slides: [CreationMarket2Slide],
  },
};

export const CreationMarket3: Story = {
  args: {
    slides: [CreationMarket3Slide],
  },
};

export const CreationMarket4: Story = {
  args: {
    slides: [CreationMarket4Slide],
  },
};

export const CreationMarket5: Story = {
  args: {
    slides: [CreationMarket5Slide],
  },
};

export const CreationMarket6: Story = {
  args: {
    slides: [CreationMarket6Slide],
  },
};

export const CreationTimeline1: Story = {
  args: {
    slides: [CreationTimeline1Slide],
  },
};

export const CreationTimeline2: Story = {
  args: {
    slides: [CreationTimeline2Slide],
  },
};

export const CreationTimeline3: Story = {
  args: {
    slides: [CreationTimeline3Slide],
  },
};

export const CreationTimeline4: Story = {
  args: {
    slides: [CreationTimeline4Slide],
  },
};

export const CreationFinal1: Story = {
  args: {
    slides: [CreationFinal1Slide],
  },
};

export const CreationFinal2: Story = {
  args: {
    slides: [CreationFinal2Slide],
  },
};

export const CreationFinal3: Story = {
  args: {
    slides: [CreationFinal3Slide],
  },
};

export const CreationFinal4: Story = {
  args: {
    slides: [CreationFinal4Slide],
  },
};

export const CreationFinal5: Story = {
  args: {
    slides: [CreationFinal5Slide],
  },
};

export const CreationFinal6: Story = {
  args: {
    slides: [CreationFinal6Slide],
  },
};

export const CreationFinal7: Story = {
  args: {
    slides: [CreationFinal7Slide],
  },
};

export const CreationFinal8: Story = {
  args: {
    slides: [CreationFinal8Slide],
  },
};

export const DuringSectionTitle: Story = {
  args: {
    slides: [DuringSectionTitleSlide],
  },
};

export const DuringWhere1: Story = {
  args: {
    slides: [DuringWhere1Slide],
  },
};

export const DuringWhere2: Story = {
  args: {
    slides: [DuringWhere2Slide],
  },
};

export const DuringWhere3: Story = {
  args: {
    slides: [DuringWhere3Slide],
  },
};

export const EndTitle: Story = {
  args: {
    slides: [EndTitleSlide],
  },
};
