import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck, ViewTypes } from '@/components/core';

import After1Slide from '../After1';
import After2Slide from '../After2';
import After3Slide from '../After3';
import After4Slide from '../After4';
import After5Slide from '../After5';
import After6Slide from '../After6';
import After6bSlide from '../After6b';
import After6cSlide from '../After6c';
import After6dSlide from '../After6d';
import After6eSlide from '../After6e';
import After6fSlide from '../After6f';
import After7Slide from '../After7';
import AfterEnd1Slide from '../AfterEnd1';
import AfterEnd1bSlide from '../AfterEnd1b';
import AfterEnd1cSlide from '../AfterEnd1c';
import AfterEnd1dSlide from '../AfterEnd1d';
import AfterEnd2Slide from '../AfterEnd2';
import AfterEnd3Slide from '../AfterEnd3';
import AfterEnd4Slide from '../AfterEnd4';
import AfterEnd5Slide from '../AfterEnd5';
import AfterEnd5bSlide from '../AfterEnd5b';
import AfterEnd6Slide from '../AfterEnd6';
import AfterSectionTitleSlide from '../AfterSectionTitle';
import BeforeCC1Slide from '../BeforeCC1';
import BeforeCC2Slide from '../BeforeCC2';
import BeforeCC3Slide from '../BeforeCC3';
import BeforeCC4Slide from '../BeforeCC4';
import BeforeCC5Slide from '../BeforeCC5';
import BeforeMe1Slide from '../BeforeMe1';
import BeforeMe1bSlide from '../BeforeMe1b';
import BeforeMe2Slide from '../BeforeMe2';
import BeforeMe2bSlide from '../BeforeMe2b';
import BeforeMe2cSlide from '../BeforeMe2c';
import BeforeMe3Slide from '../BeforeMe3';
import BeforeSectionTitleSlide from '../BeforeSectionTitle';
import CreationContact1Slide from '../CreationContact1';
import CreationContact2Slide from '../CreationContact2';
import CreationFinal1Slide from '../CreationFinal1';
import CreationFinal2Slide from '../CreationFinal2';
import CreationFinal2bSlide from '../CreationFinal2b';
import CreationFinal3Slide from '../CreationFinal3';
import CreationFinal4Slide from '../CreationFinal4';
import CreationFinal5Slide from '../CreationFinal5';
import CreationFinal6Slide from '../CreationFinal6';
import CreationFinal7Slide from '../CreationFinal7';
import CreationFinal8Slide from '../CreationFinal8';
import CreationIdea1Slide from '../CreationIdea1';
import CreationIdea2Slide from '../CreationIdea2';
import CreationIdea2bSlide from '../CreationIdea2b';
import CreationIdea3Slide from '../CreationIdea3';
import CreationIdea3bSlide from '../CreationIdea3b';
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
import CreationMeeting1bSlide from '../CreationMeeting1b';
import CreationMeeting1cSlide from '../CreationMeeting1c';
import CreationMeeting1dSlide from '../CreationMeeting1d';
import CreationMeeting1eSlide from '../CreationMeeting1e';
import CreationMeeting1fSlide from '../CreationMeeting1f';
import CreationMeeting2Slide from '../CreationMeeting2';
import CreationMeeting3Slide from '../CreationMeeting3';
import CreationMeeting4Slide from '../CreationMeeting4';
import CreationMeeting4bSlide from '../CreationMeeting4b';
import CreationMeeting4cSlide from '../CreationMeeting4c';
import CreationMeeting4dSlide from '../CreationMeeting4d';
import CreationMeeting4eSlide from '../CreationMeeting4e';
import CreationMeeting4fSlide from '../CreationMeeting4f';
import CreationMeeting5Slide from '../CreationMeeting5';
import CreationMeeting6Slide from '../CreationMeeting6';
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
import DuringLearnHaskell1Slide from '../DuringLearnHaskell1';
import DuringLearnHaskell2Slide from '../DuringLearnHaskell2';
import DuringLearnHaskell3Slide from '../DuringLearnHaskell3';
import DuringLearnHaskell3bSlide from '../DuringLearnHaskell3b';
import DuringLearnHaskell3cSlide from '../DuringLearnHaskell3c';
import DuringLearnHaskell3dSlide from '../DuringLearnHaskell3d';
import DuringLearnHaskell4Slide from '../DuringLearnHaskell4';
import DuringLearnHaskell5Slide from '../DuringLearnHaskell5';
import DuringLearnHaskell6Slide from '../DuringLearnHaskell6';
import DuringLearnHaskell6bSlide from '../DuringLearnHaskell6b';
import DuringLearnHaskell6cSlide from '../DuringLearnHaskell6c';
import DuringLearnHaskell6dSlide from '../DuringLearnHaskell6d';
import DuringPlatform1Slide from '../DuringPlatform1';
import DuringPlatform2Slide from '../DuringPlatform2';
import DuringPlatform3Slide from '../DuringPlatform3';
import DuringPlatform4Slide from '../DuringPlatform4';
import DuringPlatform5Slide from '../DuringPlatform5';
import DuringSectionTitleSlide from '../DuringSectionTitle';
import DuringSeed1Slide from '../DuringSeed1';
import DuringSeed2Slide from '../DuringSeed2';
import DuringSeed2bSlide from '../DuringSeed2b';
import DuringSeed2cSlide from '../DuringSeed2c';
import DuringSeed3Slide from '../DuringSeed3';
import DuringSeed4Slide from '../DuringSeed4';
import DuringSeed5Slide from '../DuringSeed5';
import DuringSeed6Slide from '../DuringSeed6';
import DuringSeed7Slide from '../DuringSeed7';
import DuringSeed8Slide from '../DuringSeed8';
import DuringSeed9Slide from '../DuringSeed9';
import DuringSite1Slide from '../DuringSite1';
import DuringSite1bSlide from '../DuringSite1b';
import DuringSite1cSlide from '../DuringSite1c';
import DuringSite1dSlide from '../DuringSite1d';
import DuringSite1eSlide from '../DuringSite1e';
import DuringSite2Slide from '../DuringSite2';
import DuringSite3Slide from '../DuringSite3';
import DuringSite3bSlide from '../DuringSite3b';
import DuringSite3cSlide from '../DuringSite3c';
import DuringSite3dSlide from '../DuringSite3d';
import DuringSite4Slide from '../DuringSite4';
import DuringSite4bSlide from '../DuringSite4b';
import DuringSite5Slide from '../DuringSite5';
import DuringSite6Slide from '../DuringSite6';
import DuringSite7Slide from '../DuringSite7';
import DuringSiteMvp1Slide from '../DuringSiteMvp1';
import DuringSiteMvp10Slide from '../DuringSiteMvp10';
import DuringSiteMvp11Slide from '../DuringSiteMvp11';
import DuringSiteMvp2Slide from '../DuringSiteMvp2';
import DuringSiteMvp3Slide from '../DuringSiteMvp3';
import DuringSiteMvp3bSlide from '../DuringSiteMvp3b';
import DuringSiteMvp3cSlide from '../DuringSiteMvp3c';
import DuringSiteMvp4Slide from '../DuringSiteMvp4';
import DuringSiteMvp4bSlide from '../DuringSiteMvp4b';
import DuringSiteMvp4cSlide from '../DuringSiteMvp4c';
import DuringSiteMvp4dSlide from '../DuringSiteMvp4d';
import DuringSiteMvp4eSlide from '../DuringSiteMvp4e';
import DuringSiteMvp4fSlide from '../DuringSiteMvp4f';
import DuringSiteMvp4gSlide from '../DuringSiteMvp4g';
import DuringSiteMvp4hSlide from '../DuringSiteMvp4h';
import DuringSiteMvp4iSlide from '../DuringSiteMvp4i';
import DuringSiteMvp5Slide from '../DuringSiteMvp5';
import DuringSiteMvp6Slide from '../DuringSiteMvp6';
import DuringSiteMvp6bSlide from '../DuringSiteMvp6b';
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
import SurveyResultSlide from '../SurveyResult';
import TimelineSlide from '../Timeline';

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
    slides: [IntroductionSlide],
    view: ViewTypes.printNotes,
  },
};

export const Fairvioo: Story = {
  args: {
    slides: [Fairvioo1Slide, Fairvioo2Slide, Fairvioo3Slide, Fairvioo4Slide],
    view: ViewTypes.printNotes,
  },
};

export const Preface: Story = {
  args: {
    slides: [Preface1Slide, Preface2Slide, Preface3Slide, Preface4Slide],
    view: ViewTypes.printNotes,
  },
};

export const Numbers: Story = {
  args: {
    slides: [Numbers1Slide, Numbers2Slide, Numbers3Slide, Numbers4Slide],
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
    slides: [
      BeforeMe1Slide,
      BeforeMe1bSlide,
      BeforeMe2Slide,
      BeforeMe2bSlide,
      BeforeMe2cSlide,
      BeforeMe3Slide,
    ],
    view: ViewTypes.printNotes,
  },
};

export const BeforeCaptainContrat: Story = {
  args: {
    slides: [
      BeforeCC1Slide,
      BeforeCC2Slide,
      BeforeCC3Slide,
      BeforeCC4Slide,
      BeforeCC5Slide,
    ],
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
    slides: [CreationContact1Slide, CreationContact2Slide],
    view: ViewTypes.printNotes,
  },
};

export const CreationMeeting: Story = {
  args: {
    slides: [
      CreationMeeting1Slide,
      CreationMeeting1bSlide,
      CreationMeeting1cSlide,
      CreationMeeting1dSlide,
      CreationMeeting1eSlide,
      CreationMeeting1fSlide,
      CreationMeeting2Slide,
      CreationMeeting3Slide,
      CreationMeeting4Slide,
      CreationMeeting4bSlide,
      CreationMeeting4cSlide,
      CreationMeeting4dSlide,
      CreationMeeting4eSlide,
      CreationMeeting4fSlide,
      CreationMeeting5Slide,
      CreationMeeting6Slide,
    ],
    view: ViewTypes.printNotes,
  },
};

export const CreationIdea: Story = {
  args: {
    slides: [
      CreationIdea1Slide,
      CreationIdea2Slide,
      CreationIdea2bSlide,
      CreationIdea3Slide,
      CreationIdea3bSlide,
      CreationIdea4Slide,
      CreationIdea5Slide,
      CreationIdea6Slide,
      CreationIdea7Slide,
      CreationIdea8Slide,
      CreationIdea9Slide,
    ],
    view: ViewTypes.printNotes,
  },
};

export const CreationMarket: Story = {
  args: {
    slides: [
      CreationMarket1Slide,
      CreationMarket2Slide,
      CreationMarket3Slide,
      CreationMarket4Slide,
      CreationMarket5Slide,
      CreationMarket6Slide,
    ],
    view: ViewTypes.printNotes,
  },
};

export const CreationTimeline: Story = {
  args: {
    slides: [
      CreationTimeline1Slide,
      CreationTimeline2Slide,
      CreationTimeline3Slide,
      CreationTimeline4Slide,
    ],
    view: ViewTypes.printNotes,
  },
};

export const CreationFinal: Story = {
  args: {
    slides: [
      CreationFinal1Slide,
      CreationFinal2Slide,
      CreationFinal2bSlide,
      CreationFinal3Slide,
      CreationFinal4Slide,
      CreationFinal5Slide,
      CreationFinal6Slide,
      CreationFinal7Slide,
      CreationFinal8Slide,
    ],
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
    slides: [
      DuringWhere1Slide,
      DuringWhere2Slide,
      DuringWhere3Slide,
      DuringWhere4Slide,
    ],
    view: ViewTypes.printNotes,
  },
};

export const DuringEssec: Story = {
  args: {
    slides: [DuringEssec1Slide, DuringEssec2Slide, DuringEssec3Slide],
    view: ViewTypes.printNotes,
  },
};

export const DuringDauphine: Story = {
  args: {
    slides: [
      DuringDauphine1Slide,
      DuringDauphine2Slide,
      DuringDauphine3Slide,
      DuringDauphine4Slide,
    ],
    view: ViewTypes.printNotes,
  },
};

export const DuringSite: Story = {
  args: {
    slides: [
      DuringSite1Slide,
      DuringSite1bSlide,
      DuringSite1cSlide,
      DuringSite1dSlide,
      DuringSite1eSlide,
      DuringSite2Slide,
      DuringSite3Slide,
      DuringSite3bSlide,
      DuringSite3cSlide,
      DuringSite3dSlide,
      DuringSite4Slide,
      DuringSite4bSlide,
      DuringSite5Slide,
      DuringSite6Slide,
      DuringSite7Slide,
    ],
    view: ViewTypes.printNotes,
  },
};

export const DuringSiteMvp: Story = {
  args: {
    slides: [
      DuringSiteMvp1Slide,
      DuringSiteMvp2Slide,
      DuringSiteMvp3Slide,
      DuringSiteMvp3bSlide,
      DuringSiteMvp3cSlide,
      DuringSiteMvp4Slide,
      DuringSiteMvp4bSlide,
      DuringSiteMvp4cSlide,
      DuringSiteMvp4dSlide,
      DuringSiteMvp4eSlide,
      DuringSiteMvp4fSlide,
      DuringSiteMvp4gSlide,
      DuringSiteMvp4hSlide,
      DuringSiteMvp4iSlide,
      DuringSiteMvp5Slide,
      DuringSiteMvp6Slide,
      DuringSiteMvp6bSlide,
      DuringSiteMvp7Slide,
      DuringSiteMvp8Slide,
      DuringSiteMvp9Slide,
      DuringSiteMvp10Slide,
      DuringSiteMvp11Slide,
    ],
    view: ViewTypes.printNotes,
  },
};

export const DuringPlatform: Story = {
  args: {
    slides: [
      DuringPlatform1Slide,
      DuringPlatform2Slide,
      DuringPlatform3Slide,
      DuringPlatform4Slide,
      DuringPlatform5Slide,
    ],
    view: ViewTypes.printNotes,
  },
};

export const DuringStack: Story = {
  args: {
    slides: [
      DuringStack1Slide,
      DuringStack2Slide,
      DuringStack3Slide,
      DuringStack4Slide,
      DuringStack5Slide,
    ],
    view: ViewTypes.printNotes,
  },
};

export const DuringHaskellChoice: Story = {
  args: {
    slides: [
      DuringHaskellChoice1Slide,
      DuringHaskellChoice2Slide,
      DuringHaskellChoice3Slide,
      DuringHaskellChoice4Slide,
      DuringHaskellChoice5Slide,
      DuringHaskellChoice6Slide,
      DuringHaskellChoice7Slide,
      DuringHaskellChoice8Slide,
      DuringHaskellChoice9Slide,
      DuringHaskellChoice10Slide,
      DuringHaskellChoice11Slide,
    ],
    view: ViewTypes.printNotes,
  },
};

export const DuringHaskell: Story = {
  args: {
    slides: [
      DuringHaskell1Slide,
      DuringHaskell2Slide,
      DuringHaskell3Slide,
      DuringHaskell4Slide,
      DuringHaskell5Slide,
      DuringHaskell6Slide,
      DuringHaskell7Slide,
      DuringHaskell8Slide,
      DuringHaskell9Slide,
      DuringHaskell10Slide,
      DuringHaskell11Slide,
      DuringHaskell12Slide,
      DuringHaskell13Slide,
      DuringHaskell14Slide,
      DuringHaskell15Slide,
    ],
    view: ViewTypes.printNotes,
  },
};

export const DuringLearnHaskell: Story = {
  args: {
    slides: [
      DuringLearnHaskell1Slide,
      DuringLearnHaskell2Slide,
      DuringLearnHaskell3Slide,
      DuringLearnHaskell3bSlide,
      DuringLearnHaskell3cSlide,
      DuringLearnHaskell3dSlide,
      DuringLearnHaskell4Slide,
      DuringLearnHaskell5Slide,
      DuringLearnHaskell6Slide,
      DuringLearnHaskell6bSlide,
      DuringLearnHaskell6cSlide,
      DuringLearnHaskell6dSlide,
    ],
    view: ViewTypes.printNotes,
  },
};

export const DuringHaskellConsequences: Story = {
  args: {
    slides: [
      DuringHaskellConsequences1Slide,
      DuringHaskellConsequences2Slide,
      DuringHaskellConsequences3Slide,
      DuringHaskellConsequences4Slide,
      DuringHaskellConsequences5Slide,
      DuringHaskellConsequences6Slide,
      DuringHaskellConsequences7Slide,
    ],
    view: ViewTypes.printNotes,
  },
};

export const DuringSeed: Story = {
  args: {
    slides: [
      DuringSeed1Slide,
      DuringSeed2Slide,
      DuringSeed2bSlide,
      DuringSeed2cSlide,
      DuringSeed3Slide,
      DuringSeed4Slide,
      DuringSeed5Slide,
      DuringSeed6Slide,
      DuringSeed7Slide,
      DuringSeed8Slide,
      DuringSeed9Slide,
    ],
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
    slides: [
      AfterEnd1Slide,
      AfterEnd1bSlide,
      AfterEnd1cSlide,
      AfterEnd1dSlide,
      AfterEnd2Slide,
      AfterEnd3Slide,
      AfterEnd4Slide,
      AfterEnd5Slide,
      AfterEnd5bSlide,
      AfterEnd6Slide,
    ],
    view: ViewTypes.printNotes,
  },
};

export const After: Story = {
  args: {
    slides: [
      After1Slide,
      After2Slide,
      After3Slide,
      After4Slide,
      After5Slide,
      After6Slide,
      After6bSlide,
      After6cSlide,
      After6dSlide,
      After6eSlide,
      After6fSlide,
      After7Slide,
    ],
    view: ViewTypes.printNotes,
  },
};

export const EndTitle: Story = {
  args: {
    slides: [EndTitleSlide],
    view: ViewTypes.printNotes,
  },
};
