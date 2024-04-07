import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck } from '@/components/core';

import AbstractSlide from '../Abstract';
import AfterEnd1Slide from '../AfterEnd1';
import AfterEnd2Slide from '../AfterEnd2';
import AfterEnd3Slide from '../AfterEnd3';
import AfterEnd4Slide from '../AfterEnd4';
import AfterEnd5Slide from '../AfterEnd5';
import AfterEnd6Slide from '../AfterEnd6';
import AfterSectionTitleSlide from '../AfterSectionTitle';
import BeforeCC1Slide from '../BeforeCC1';
import BeforeCC2Slide from '../BeforeCC2';
import BeforeCC3Slide from '../BeforeCC3';
import BeforeCC4Slide from '../BeforeCC4';
import BeforeCC5Slide from '../BeforeCC5';
import BeforeMe1Slide from '../BeforeMe1';
import BeforeMe2Slide from '../BeforeMe2';
import BeforeMe3Slide from '../BeforeMe3';
import BeforeSectionTitleSlide from '../BeforeSectionTitle';
import CreationContact1Slide from '../CreationContact1';
import CreationContact2Slide from '../CreationContact2';
import CreationFinal1Slide from '../CreationFinal1';
import CreationFinal2Slide from '../CreationFinal2';
import CreationFinal3Slide from '../CreationFinal3';
import CreationFinal4Slide from '../CreationFinal4';
import CreationFinal5Slide from '../CreationFinal5';
import CreationFinal6Slide from '../CreationFinal6';
import CreationFinal7Slide from '../CreationFinal7';
import CreationFinal8Slide from '../CreationFinal8';
import CreationIdea1Slide from '../CreationIdea1';
import CreationIdea2Slide from '../CreationIdea2';
import CreationIdea3Slide from '../CreationIdea3';
import CreationIdea4Slide from '../CreationIdea4';
import CreationIdea5Slide from '../CreationIdea5';
import CreationIdea6Slide from '../CreationIdea6';
import CreationIdea7Slide from '../CreationIdea7';
import CreationIdea8Slide from '../CreationIdea8';
import CreationIdea9Slide from '../CreationIdea9';
import CreationMarket1Slide from '../CreationMarket1';
import CreationMarket2Slide from '../CreationMarket2';
import CreationMarket3Slide from '../CreationMarket3';
import CreationMarket4Slide from '../CreationMarket4';
import CreationMarket5Slide from '../CreationMarket5';
import CreationMarket6Slide from '../CreationMarket6';
import CreationMeeting1Slide from '../CreationMeeting1';
import CreationMeeting2Slide from '../CreationMeeting2';
import CreationMeeting3Slide from '../CreationMeeting3';
import CreationMeeting4Slide from '../CreationMeeting4';
import CreationMeeting5Slide from '../CreationMeeting5';
import CreationMeeting6Slide from '../CreationMeeting6';
import CreationMeeting7Slide from '../CreationMeeting7';
import CreationSectionTitleSlide from '../CreationSectionTitle';
import CreationTimeline1Slide from '../CreationTimeline1';
import CreationTimeline2Slide from '../CreationTimeline2';
import CreationTimeline3Slide from '../CreationTimeline3';
import CreationTimeline4Slide from '../CreationTimeline4';
import DuringDauphine1Slide from '../DuringDauphine1';
import DuringDauphine2Slide from '../DuringDauphine2';
import DuringDauphine3Slide from '../DuringDauphine3';
import DuringDauphine4Slide from '../DuringDauphine4';
import DuringEssec1Slide from '../DuringEssec1';
import DuringEssec2Slide from '../DuringEssec2';
import DuringEssec3Slide from '../DuringEssec3';
import DuringHaskell1Slide from '../DuringHaskell1';
import DuringHaskell10Slide from '../DuringHaskell10';
import DuringHaskell11Slide from '../DuringHaskell11';
import DuringHaskell12Slide from '../DuringHaskell12';
import DuringHaskell13Slide from '../DuringHaskell13';
import DuringHaskell14Slide from '../DuringHaskell14';
import DuringHaskell15Slide from '../DuringHaskell15';
import DuringHaskell2Slide from '../DuringHaskell2';
import DuringHaskell3Slide from '../DuringHaskell3';
import DuringHaskell4Slide from '../DuringHaskell4';
import DuringHaskell5Slide from '../DuringHaskell5';
import DuringHaskell6Slide from '../DuringHaskell6';
import DuringHaskell7Slide from '../DuringHaskell7';
import DuringHaskell8Slide from '../DuringHaskell8';
import DuringHaskell9Slide from '../DuringHaskell9';
import DuringHaskellChoice1Slide from '../DuringHaskellChoice1';
import DuringHaskellChoice10Slide from '../DuringHaskellChoice10';
import DuringHaskellChoice11Slide from '../DuringHaskellChoice11';
import DuringHaskellChoice2Slide from '../DuringHaskellChoice2';
import DuringHaskellChoice3Slide from '../DuringHaskellChoice3';
import DuringHaskellChoice4Slide from '../DuringHaskellChoice4';
import DuringHaskellChoice5Slide from '../DuringHaskellChoice5';
import DuringHaskellChoice6Slide from '../DuringHaskellChoice6';
import DuringHaskellChoice7Slide from '../DuringHaskellChoice7';
import DuringHaskellChoice8Slide from '../DuringHaskellChoice8';
import DuringHaskellChoice9Slide from '../DuringHaskellChoice9';
import DuringHaskellConsequences1Slide from '../DuringHaskellConsequences1';
import DuringHaskellConsequences2Slide from '../DuringHaskellConsequences2';
import DuringHaskellConsequences3Slide from '../DuringHaskellConsequences3';
import DuringHaskellConsequences4Slide from '../DuringHaskellConsequences4';
import DuringHaskellConsequences5Slide from '../DuringHaskellConsequences5';
import DuringHaskellConsequences6Slide from '../DuringHaskellConsequences6';
import DuringHaskellConsequences7Slide from '../DuringHaskellConsequences7';
import DuringHaskellConsequences8Slide from '../DuringHaskellConsequences8';
import DuringLearnHaskell1Slide from '../DuringLearnHaskell1';
import DuringLearnHaskell2Slide from '../DuringLearnHaskell2';
import DuringLearnHaskell3Slide from '../DuringLearnHaskell3';
import DuringLearnHaskell4Slide from '../DuringLearnHaskell4';
import DuringLearnHaskell5Slide from '../DuringLearnHaskell5';
import DuringLearnHaskell6Slide from '../DuringLearnHaskell6';
import DuringPlatform1Slide from '../DuringPlatform1';
import DuringPlatform2Slide from '../DuringPlatform2';
import DuringPlatform3Slide from '../DuringPlatform3';
import DuringPlatform4Slide from '../DuringPlatform4';
import DuringPlatform5Slide from '../DuringPlatform5';
import DuringSectionTitleSlide from '../DuringSectionTitle';
import DuringSeed1Slide from '../DuringSeed1';
import DuringSeed2Slide from '../DuringSeed2';
import DuringSeed3Slide from '../DuringSeed3';
import DuringSeed4Slide from '../DuringSeed4';
import DuringSeed5Slide from '../DuringSeed5';
import DuringSeed6Slide from '../DuringSeed6';
import DuringSeed7Slide from '../DuringSeed7';
import DuringSeed8Slide from '../DuringSeed8';
import DuringSeed9Slide from '../DuringSeed9';
import DuringSite1Slide from '../DuringSite1';
import DuringSite2Slide from '../DuringSite2';
import DuringSite3Slide from '../DuringSite3';
import DuringSite4Slide from '../DuringSite4';
import DuringSite5Slide from '../DuringSite5';
import DuringSite6Slide from '../DuringSite6';
import DuringSite7Slide from '../DuringSite7';
import DuringSiteMvp1Slide from '../DuringSiteMvp1';
import DuringSiteMvp10Slide from '../DuringSiteMvp10';
import DuringSiteMvp2Slide from '../DuringSiteMvp2';
import DuringSiteMvp3Slide from '../DuringSiteMvp3';
import DuringSiteMvp4Slide from '../DuringSiteMvp4';
import DuringSiteMvp5Slide from '../DuringSiteMvp5';
import DuringSiteMvp6Slide from '../DuringSiteMvp6';
import DuringSiteMvp7Slide from '../DuringSiteMvp7';
import DuringSiteMvp8Slide from '../DuringSiteMvp8';
import DuringSiteMvp9Slide from '../DuringSiteMvp9';
import DuringStack1Slide from '../DuringStack1';
import DuringStack2Slide from '../DuringStack2';
import DuringStack3Slide from '../DuringStack3';
import DuringStack4Slide from '../DuringStack4';
import DuringStack5Slide from '../DuringStack5';
import DuringWhere1Slide from '../DuringWhere1';
import DuringWhere2Slide from '../DuringWhere2';
import DuringWhere3Slide from '../DuringWhere3';
import DuringWhere4Slide from '../DuringWhere4';
import EndTitleSlide from '../EndTitle';
import Fairvioo1Slide from '../Fairvioo1';
import Fairvioo2Slide from '../Fairvioo2';
import Fairvioo3Slide from '../Fairvioo3';
import Fairvioo4Slide from '../Fairvioo4';
import FeedbacksQRSlide from '../FeedbacksQR';
import IntroductionSlide from '../Introduction';
import MainTitleSlide from '../MainTitle';
import Numbers1Slide from '../Numbers1';
import Numbers2Slide from '../Numbers2';
import Numbers3Slide from '../Numbers3';
import Numbers4Slide from '../Numbers4';
import Preface1Slide from '../Preface1';
import Preface2Slide from '../Preface2';
import Preface3Slide from '../Preface3';
import Preface4Slide from '../Preface4';
import PromotionLyonCraftSlide from '../PromotionLyonCraft';
import SurverQRSlide from '../SurveyQR';
import SurveyResultSlide from '../SurveyResult';
import TimelineSlide from '../Timeline';

const meta = {
  title: 'Talks/HighwayToFail/Contents',
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

export const SurveyQR: Story = {
  args: {
    slides: [SurverQRSlide],
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

export const SurveyResult: Story = {
  args: {
    slides: [SurveyResultSlide],
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

export const CreationMeeting6: Story = {
  args: {
    slides: [CreationMeeting6Slide],
  },
};

export const CreationMeeting7: Story = {
  args: {
    slides: [CreationMeeting7Slide],
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

export const CreationIdea9: Story = {
  args: {
    slides: [CreationIdea9Slide],
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

export const DuringWhere4: Story = {
  args: {
    slides: [DuringWhere4Slide],
  },
};

export const DuringEssec1: Story = {
  args: {
    slides: [DuringEssec1Slide],
  },
};

export const DuringEssec2: Story = {
  args: {
    slides: [DuringEssec2Slide],
  },
};

export const DuringEssec3: Story = {
  args: {
    slides: [DuringEssec3Slide],
  },
};

export const DuringDauphine1: Story = {
  args: {
    slides: [DuringDauphine1Slide],
  },
};

export const DuringDauphine2: Story = {
  args: {
    slides: [DuringDauphine2Slide],
  },
};

export const DuringDauphine3: Story = {
  args: {
    slides: [DuringDauphine3Slide],
  },
};

export const DuringDauphine4: Story = {
  args: {
    slides: [DuringDauphine4Slide],
  },
};

export const DuringSite1: Story = {
  args: {
    slides: [DuringSite1Slide],
  },
};

export const DuringSite2: Story = {
  args: {
    slides: [DuringSite2Slide],
  },
};

export const DuringSite3: Story = {
  args: {
    slides: [DuringSite3Slide],
  },
};

export const DuringSite4: Story = {
  args: {
    slides: [DuringSite4Slide],
  },
};

export const DuringSite5: Story = {
  args: {
    slides: [DuringSite5Slide],
  },
};

export const DuringSite6: Story = {
  args: {
    slides: [DuringSite6Slide],
  },
};

export const DuringSite7: Story = {
  args: {
    slides: [DuringSite7Slide],
  },
};

export const DuringSiteMvp1: Story = {
  args: {
    slides: [DuringSiteMvp1Slide],
  },
};

export const DuringSiteMvp2: Story = {
  args: {
    slides: [DuringSiteMvp2Slide],
  },
};

export const DuringSiteMvp3: Story = {
  args: {
    slides: [DuringSiteMvp3Slide],
  },
};

export const DuringSiteMvp4: Story = {
  args: {
    slides: [DuringSiteMvp4Slide],
  },
};

export const DuringSiteMvp5: Story = {
  args: {
    slides: [DuringSiteMvp5Slide],
  },
};

export const DuringSiteMvp6: Story = {
  args: {
    slides: [DuringSiteMvp6Slide],
  },
};

export const DuringSiteMvp7: Story = {
  args: {
    slides: [DuringSiteMvp7Slide],
  },
};

export const DuringSiteMvp8: Story = {
  args: {
    slides: [DuringSiteMvp8Slide],
  },
};

export const DuringSiteMvp9: Story = {
  args: {
    slides: [DuringSiteMvp9Slide],
  },
};

export const DuringSiteMvp10: Story = {
  args: {
    slides: [DuringSiteMvp10Slide],
  },
};

export const DuringPlatform1: Story = {
  args: {
    slides: [DuringPlatform1Slide],
  },
};

export const DuringPlatform2: Story = {
  args: {
    slides: [DuringPlatform2Slide],
  },
};

export const DuringPlatform3: Story = {
  args: {
    slides: [DuringPlatform3Slide],
  },
};

export const DuringPlatform4: Story = {
  args: {
    slides: [DuringPlatform4Slide],
  },
};

export const DuringPlatform5: Story = {
  args: {
    slides: [DuringPlatform5Slide],
  },
};

export const DuringStack1: Story = {
  args: {
    slides: [DuringStack1Slide],
  },
};

export const DuringStack2: Story = {
  args: {
    slides: [DuringStack2Slide],
  },
};

export const DuringStack3: Story = {
  args: {
    slides: [DuringStack3Slide],
  },
};

export const DuringStack4: Story = {
  args: {
    slides: [DuringStack4Slide],
  },
};

export const DuringStack5: Story = {
  args: {
    slides: [DuringStack5Slide],
  },
};

export const DuringHaskellChoice1: Story = {
  args: {
    slides: [DuringHaskellChoice1Slide],
  },
};

export const DuringHaskellChoice2: Story = {
  args: {
    slides: [DuringHaskellChoice2Slide],
  },
};

export const DuringHaskellChoice3: Story = {
  args: {
    slides: [DuringHaskellChoice3Slide],
  },
};

export const DuringHaskellChoice4: Story = {
  args: {
    slides: [DuringHaskellChoice4Slide],
  },
};

export const DuringHaskellChoice5: Story = {
  args: {
    slides: [DuringHaskellChoice5Slide],
  },
};

export const DuringHaskellChoice6: Story = {
  args: {
    slides: [DuringHaskellChoice6Slide],
  },
};

export const DuringHaskellChoice7: Story = {
  args: {
    slides: [DuringHaskellChoice7Slide],
  },
};

export const DuringHaskellChoice8: Story = {
  args: {
    slides: [DuringHaskellChoice8Slide],
  },
};

export const DuringHaskellChoice9: Story = {
  args: {
    slides: [DuringHaskellChoice9Slide],
  },
};

export const DuringHaskellChoice10: Story = {
  args: {
    slides: [DuringHaskellChoice10Slide],
  },
};

export const DuringHaskellChoice11: Story = {
  args: {
    slides: [DuringHaskellChoice11Slide],
  },
};

export const DuringHaskell1: Story = {
  args: {
    slides: [DuringHaskell1Slide],
  },
};

export const DuringHaskell2: Story = {
  args: {
    slides: [DuringHaskell2Slide],
  },
};

export const DuringHaskell3: Story = {
  args: {
    slides: [DuringHaskell3Slide],
  },
};

export const DuringHaskell4: Story = {
  args: {
    slides: [DuringHaskell4Slide],
  },
};

export const DuringHaskell5: Story = {
  args: {
    slides: [DuringHaskell5Slide],
  },
};

export const DuringHaskell6: Story = {
  args: {
    slides: [DuringHaskell6Slide],
  },
};

export const DuringHaskell7: Story = {
  args: {
    slides: [DuringHaskell7Slide],
  },
};

export const DuringHaskell8: Story = {
  args: {
    slides: [DuringHaskell8Slide],
  },
};

export const DuringHaskell9: Story = {
  args: {
    slides: [DuringHaskell9Slide],
  },
};

export const DuringHaskell10: Story = {
  args: {
    slides: [DuringHaskell10Slide],
  },
};

export const DuringHaskell11: Story = {
  args: {
    slides: [DuringHaskell11Slide],
  },
};

export const DuringHaskell12: Story = {
  args: {
    slides: [DuringHaskell12Slide],
  },
};

export const DuringHaskell13: Story = {
  args: {
    slides: [DuringHaskell13Slide],
  },
};

export const DuringHaskell14: Story = {
  args: {
    slides: [DuringHaskell14Slide],
  },
};

export const DuringHaskell15: Story = {
  args: {
    slides: [DuringHaskell15Slide],
  },
};

export const DuringLearnHaskell1: Story = {
  args: {
    slides: [DuringLearnHaskell1Slide],
  },
};

export const DuringLearnHaskell2: Story = {
  args: {
    slides: [DuringLearnHaskell2Slide],
  },
};

export const DuringLearnHaskell3: Story = {
  args: {
    slides: [DuringLearnHaskell3Slide],
  },
};

export const DuringLearnHaskell4: Story = {
  args: {
    slides: [DuringLearnHaskell4Slide],
  },
};

export const DuringLearnHaskell5: Story = {
  args: {
    slides: [DuringLearnHaskell5Slide],
  },
};

export const DuringLearnHaskell6: Story = {
  args: {
    slides: [DuringLearnHaskell6Slide],
  },
};

export const DuringHaskellConsequences1: Story = {
  args: {
    slides: [DuringHaskellConsequences1Slide],
  },
};

export const DuringHaskellConsequences2: Story = {
  args: {
    slides: [DuringHaskellConsequences2Slide],
  },
};

export const DuringHaskellConsequences3: Story = {
  args: {
    slides: [DuringHaskellConsequences3Slide],
  },
};
export const DuringHaskellConsequences4: Story = {
  args: {
    slides: [DuringHaskellConsequences4Slide],
  },
};

export const DuringHaskellConsequences5: Story = {
  args: {
    slides: [DuringHaskellConsequences5Slide],
  },
};

export const DuringHaskellConsequences6: Story = {
  args: {
    slides: [DuringHaskellConsequences6Slide],
  },
};

export const DuringHaskellConsequences7: Story = {
  args: {
    slides: [DuringHaskellConsequences7Slide],
  },
};

export const DuringHaskellConsequences8: Story = {
  args: {
    slides: [DuringHaskellConsequences8Slide],
  },
};

export const DuringSeed1: Story = {
  args: {
    slides: [DuringSeed1Slide],
  },
};

export const DuringSeed2: Story = {
  args: {
    slides: [DuringSeed2Slide],
  },
};

export const DuringSeed3: Story = {
  args: {
    slides: [DuringSeed3Slide],
  },
};

export const DuringSeed4: Story = {
  args: {
    slides: [DuringSeed4Slide],
  },
};

export const DuringSeed5: Story = {
  args: {
    slides: [DuringSeed5Slide],
  },
};

export const DuringSeed6: Story = {
  args: {
    slides: [DuringSeed6Slide],
  },
};

export const DuringSeed7: Story = {
  args: {
    slides: [DuringSeed7Slide],
  },
};

export const DuringSeed8: Story = {
  args: {
    slides: [DuringSeed8Slide],
  },
};

export const DuringSeed9: Story = {
  args: {
    slides: [DuringSeed9Slide],
  },
};

export const AfterSectionTitle: Story = {
  args: {
    slides: [AfterSectionTitleSlide],
  },
};

export const AfterEnd1: Story = {
  args: {
    slides: [AfterEnd1Slide],
  },
};

export const AfterEnd2: Story = {
  args: {
    slides: [AfterEnd2Slide],
  },
};

export const AfterEnd3: Story = {
  args: {
    slides: [AfterEnd3Slide],
  },
};

export const AfterEnd4: Story = {
  args: {
    slides: [AfterEnd4Slide],
  },
};

export const AfterEnd5: Story = {
  args: {
    slides: [AfterEnd5Slide],
  },
};

export const AfterEnd6: Story = {
  args: {
    slides: [AfterEnd6Slide],
  },
};

export const FeedbacksQR: Story = {
  args: {
    slides: [FeedbacksQRSlide],
  },
};

export const EndTitle: Story = {
  args: {
    slides: [EndTitleSlide],
  },
};
