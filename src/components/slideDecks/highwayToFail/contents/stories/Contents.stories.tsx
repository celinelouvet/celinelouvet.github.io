import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck, ViewTypes } from '@/components/core';

import After1Slide from '../after/After1';
import After2Slide from '../after/After2';
import After3Slide from '../after/After3';
import After4Slide from '../after/After4';
import After5Slide from '../after/After5';
import After6Slide from '../after/After6';
import After6bSlide from '../after/After6b';
import After6cSlide from '../after/After6c';
import After6dSlide from '../after/After6d';
import After6eSlide from '../after/After6e';
import After6fSlide from '../after/After6f';
import After7Slide from '../after/After7';
import AfterEnd1Slide from '../afterEnd/AfterEnd1';
import AfterEnd1bSlide from '../afterEnd/AfterEnd1b';
import AfterEnd1cSlide from '../afterEnd/AfterEnd1c';
import AfterEnd1dSlide from '../afterEnd/AfterEnd1d';
import AfterEnd2Slide from '../afterEnd/AfterEnd2';
import AfterEnd3Slide from '../afterEnd/AfterEnd3';
import AfterEnd4Slide from '../afterEnd/AfterEnd4';
import AfterEnd5Slide from '../afterEnd/AfterEnd5';
import AfterEnd5bSlide from '../afterEnd/AfterEnd5b';
import AfterEnd6Slide from '../afterEnd/AfterEnd6';
import AfterSectionTitleSlide from '../AfterSectionTitle';
import BeforeCC1Slide from '../beforeCC/BeforeCC1';
import BeforeCC2Slide from '../beforeCC/BeforeCC2';
import BeforeCC3Slide from '../beforeCC/BeforeCC3';
import BeforeCC4Slide from '../beforeCC/BeforeCC4';
import BeforeCC5Slide from '../beforeCC/BeforeCC5';
import BeforeMe1Slide from '../beforeMe/BeforeMe1';
import BeforeMe1bSlide from '../beforeMe/BeforeMe1b';
import BeforeMe2Slide from '../beforeMe/BeforeMe2';
import BeforeMe2bSlide from '../beforeMe/BeforeMe2b';
import BeforeMe2cSlide from '../beforeMe/BeforeMe2c';
import BeforeMe3Slide from '../beforeMe/BeforeMe3';
import BeforeSectionTitleSlide from '../BeforeSectionTitle';
import CreationContact1Slide from '../creationContact/CreationContact1';
import CreationContact2Slide from '../creationContact/CreationContact2';
import CreationFinal1Slide from '../creationFinal/CreationFinal1';
import CreationFinal2Slide from '../creationFinal/CreationFinal2';
import CreationFinal2bSlide from '../creationFinal/CreationFinal2b';
import CreationFinal3Slide from '../creationFinal/CreationFinal3';
import CreationFinal4Slide from '../creationFinal/CreationFinal4';
import CreationFinal5Slide from '../creationFinal/CreationFinal5';
import CreationFinal6Slide from '../creationFinal/CreationFinal6';
import CreationFinal7Slide from '../creationFinal/CreationFinal7';
import CreationFinal8Slide from '../creationFinal/CreationFinal8';
import CreationIdea1Slide from '../creationIdea/CreationIdea1';
import CreationIdea2Slide from '../creationIdea/CreationIdea2';
import CreationIdea2bSlide from '../creationIdea/CreationIdea2b';
import CreationIdea3Slide from '../creationIdea/CreationIdea3';
import CreationIdea3bSlide from '../creationIdea/CreationIdea3b';
import CreationIdea4Slide from '../creationIdea/CreationIdea4';
import CreationIdea5Slide from '../creationIdea/CreationIdea5';
import CreationIdea6Slide from '../creationIdea/CreationIdea6';
import CreationIdea7Slide from '../creationIdea/CreationIdea7';
import CreationIdea8Slide from '../creationIdea/CreationIdea8';
import CreationIdea9Slide from '../creationIdea/CreationIdea9';
import CreationMarket1Slide from '../creationMarket/CreationMarket1';
import CreationMarket2Slide from '../creationMarket/CreationMarket2';
import CreationMarket2bSlide from '../creationMarket/CreationMarket2b';
import CreationMarket3Slide from '../creationMarket/CreationMarket3';
import CreationMarket4Slide from '../creationMarket/CreationMarket4';
import CreationMarket5Slide from '../creationMarket/CreationMarket5';
import CreationMarket5bSlide from '../creationMarket/CreationMarket5b';
import CreationMarket5cSlide from '../creationMarket/CreationMarket5c';
import CreationMarket5dSlide from '../creationMarket/CreationMarket5d';
import CreationMarket6Slide from '../creationMarket/CreationMarket6';
import CreationMarket6bSlide from '../creationMarket/CreationMarket6b';
import CreationMarket6cSlide from '../creationMarket/CreationMarket6c';
import CreationMarket6dSlide from '../creationMarket/CreationMarket6d';
import CreationMeeting1Slide from '../creationMeeting/CreationMeeting1';
import CreationMeeting1bSlide from '../creationMeeting/CreationMeeting1b';
import CreationMeeting1cSlide from '../creationMeeting/CreationMeeting1c';
import CreationMeeting1dSlide from '../creationMeeting/CreationMeeting1d';
import CreationMeeting1eSlide from '../creationMeeting/CreationMeeting1e';
import CreationMeeting1fSlide from '../creationMeeting/CreationMeeting1f';
import CreationMeeting2Slide from '../creationMeeting/CreationMeeting2';
import CreationMeeting3Slide from '../creationMeeting/CreationMeeting3';
import CreationMeeting4Slide from '../creationMeeting/CreationMeeting4';
import CreationMeeting4bSlide from '../creationMeeting/CreationMeeting4b';
import CreationMeeting4cSlide from '../creationMeeting/CreationMeeting4c';
import CreationMeeting4dSlide from '../creationMeeting/CreationMeeting4d';
import CreationMeeting4eSlide from '../creationMeeting/CreationMeeting4e';
import CreationMeeting4fSlide from '../creationMeeting/CreationMeeting4f';
import CreationMeeting5Slide from '../creationMeeting/CreationMeeting5';
import CreationMeeting6Slide from '../creationMeeting/CreationMeeting6';
import CreationSectionTitleSlide from '../CreationSectionTitle';
import CreationTimeline1Slide from '../creationTimeline/CreationTimeline1';
import CreationTimeline2Slide from '../creationTimeline/CreationTimeline2';
import CreationTimeline3Slide from '../creationTimeline/CreationTimeline3';
import CreationTimeline4Slide from '../creationTimeline/CreationTimeline4';
import DuringDauphine1Slide from '../duringDauphine/DuringDauphine1';
import DuringDauphine2Slide from '../duringDauphine/DuringDauphine2';
import DuringDauphine3Slide from '../duringDauphine/DuringDauphine3';
import DuringDauphine4Slide from '../duringDauphine/DuringDauphine4';
import DuringEssec1Slide from '../duringEssec/DuringEssec1';
import DuringEssec2Slide from '../duringEssec/DuringEssec2';
import DuringEssec3Slide from '../duringEssec/DuringEssec3';
import DuringHaskell1Slide from '../duringHaskell/DuringHaskell1';
import DuringHaskell10Slide from '../duringHaskell/DuringHaskell10';
import DuringHaskell11Slide from '../duringHaskell/DuringHaskell11';
import DuringHaskell12Slide from '../duringHaskell/DuringHaskell12';
import DuringHaskell13Slide from '../duringHaskell/DuringHaskell13';
import DuringHaskell14Slide from '../duringHaskell/DuringHaskell14';
import DuringHaskell15Slide from '../duringHaskell/DuringHaskell15';
import DuringHaskell2Slide from '../duringHaskell/DuringHaskell2';
import DuringHaskell3Slide from '../duringHaskell/DuringHaskell3';
import DuringHaskell4Slide from '../duringHaskell/DuringHaskell4';
import DuringHaskell5Slide from '../duringHaskell/DuringHaskell5';
import DuringHaskell6Slide from '../duringHaskell/DuringHaskell6';
import DuringHaskell7Slide from '../duringHaskell/DuringHaskell7';
import DuringHaskell8Slide from '../duringHaskell/DuringHaskell8';
import DuringHaskell9Slide from '../duringHaskell/DuringHaskell9';
import DuringHaskellChoice1Slide from '../duringHaskellChoice/DuringHaskellChoice1';
import DuringHaskellChoice10Slide from '../duringHaskellChoice/DuringHaskellChoice10';
import DuringHaskellChoice11Slide from '../duringHaskellChoice/DuringHaskellChoice11';
import DuringHaskellChoice2Slide from '../duringHaskellChoice/DuringHaskellChoice2';
import DuringHaskellChoice3Slide from '../duringHaskellChoice/DuringHaskellChoice3';
import DuringHaskellChoice4Slide from '../duringHaskellChoice/DuringHaskellChoice4';
import DuringHaskellChoice5Slide from '../duringHaskellChoice/DuringHaskellChoice5';
import DuringHaskellChoice6Slide from '../duringHaskellChoice/DuringHaskellChoice6';
import DuringHaskellChoice7Slide from '../duringHaskellChoice/DuringHaskellChoice7';
import DuringHaskellChoice8Slide from '../duringHaskellChoice/DuringHaskellChoice8';
import DuringHaskellChoice9Slide from '../duringHaskellChoice/DuringHaskellChoice9';
import DuringHaskellConsequences1Slide from '../duringHaskellConsequences/DuringHaskellConsequences1';
import DuringHaskellConsequences2Slide from '../duringHaskellConsequences/DuringHaskellConsequences2';
import DuringHaskellConsequences3Slide from '../duringHaskellConsequences/DuringHaskellConsequences3';
import DuringHaskellConsequences4Slide from '../duringHaskellConsequences/DuringHaskellConsequences4';
import DuringHaskellConsequences5Slide from '../duringHaskellConsequences/DuringHaskellConsequences5';
import DuringHaskellConsequences6Slide from '../duringHaskellConsequences/DuringHaskellConsequences6';
import DuringHaskellConsequences7Slide from '../duringHaskellConsequences/DuringHaskellConsequences7';
import DuringLearnHaskell1Slide from '../duringLearnHaskell/DuringLearnHaskell1';
import DuringLearnHaskell2Slide from '../duringLearnHaskell/DuringLearnHaskell2';
import DuringLearnHaskell3Slide from '../duringLearnHaskell/DuringLearnHaskell3';
import DuringLearnHaskell3bSlide from '../duringLearnHaskell/DuringLearnHaskell3b';
import DuringLearnHaskell3cSlide from '../duringLearnHaskell/DuringLearnHaskell3c';
import DuringLearnHaskell3dSlide from '../duringLearnHaskell/DuringLearnHaskell3d';
import DuringLearnHaskell4Slide from '../duringLearnHaskell/DuringLearnHaskell4';
import DuringLearnHaskell5Slide from '../duringLearnHaskell/DuringLearnHaskell5';
import DuringLearnHaskell6Slide from '../duringLearnHaskell/DuringLearnHaskell6';
import DuringLearnHaskell6bSlide from '../duringLearnHaskell/DuringLearnHaskell6b';
import DuringLearnHaskell6cSlide from '../duringLearnHaskell/DuringLearnHaskell6c';
import DuringLearnHaskell6dSlide from '../duringLearnHaskell/DuringLearnHaskell6d';
import DuringPlatform1Slide from '../duringPlatform/DuringPlatform1';
import DuringPlatform2Slide from '../duringPlatform/DuringPlatform2';
import DuringPlatform3Slide from '../duringPlatform/DuringPlatform3';
import DuringPlatform4Slide from '../duringPlatform/DuringPlatform4';
import DuringPlatform5Slide from '../duringPlatform/DuringPlatform5';
import DuringSectionTitleSlide from '../DuringSectionTitle';
import DuringSeed1Slide from '../duringSeed/DuringSeed1';
import DuringSeed2Slide from '../duringSeed/DuringSeed2';
import DuringSeed2bSlide from '../duringSeed/DuringSeed2b';
import DuringSeed2cSlide from '../duringSeed/DuringSeed2c';
import DuringSeed3Slide from '../duringSeed/DuringSeed3';
import DuringSeed4Slide from '../duringSeed/DuringSeed4';
import DuringSeed5Slide from '../duringSeed/DuringSeed5';
import DuringSeed6Slide from '../duringSeed/DuringSeed6';
import DuringSeed7Slide from '../duringSeed/DuringSeed7';
import DuringSeed8Slide from '../duringSeed/DuringSeed8';
import DuringSeed9Slide from '../duringSeed/DuringSeed9';
import DuringSite1Slide from '../duringSite/DuringSite1';
import DuringSite1bSlide from '../duringSite/DuringSite1b';
import DuringSite1cSlide from '../duringSite/DuringSite1c';
import DuringSite1dSlide from '../duringSite/DuringSite1d';
import DuringSite1eSlide from '../duringSite/DuringSite1e';
import DuringSite2Slide from '../duringSite/DuringSite2';
import DuringSite3Slide from '../duringSite/DuringSite3';
import DuringSite3bSlide from '../duringSite/DuringSite3b';
import DuringSite3cSlide from '../duringSite/DuringSite3c';
import DuringSite3dSlide from '../duringSite/DuringSite3d';
import DuringSite4Slide from '../duringSite/DuringSite4';
import DuringSite4bSlide from '../duringSite/DuringSite4b';
import DuringSite5Slide from '../duringSite/DuringSite5';
import DuringSite6Slide from '../duringSite/DuringSite6';
import DuringSite7Slide from '../duringSite/DuringSite7';
import DuringSiteMvp1Slide from '../duringSiteMvp/DuringSiteMvp1';
import DuringSiteMvp10Slide from '../duringSiteMvp/DuringSiteMvp10';
import DuringSiteMvp11Slide from '../duringSiteMvp/DuringSiteMvp11';
import DuringSiteMvp2Slide from '../duringSiteMvp/DuringSiteMvp2';
import DuringSiteMvp3Slide from '../duringSiteMvp/DuringSiteMvp3';
import DuringSiteMvp3bSlide from '../duringSiteMvp/DuringSiteMvp3b';
import DuringSiteMvp3cSlide from '../duringSiteMvp/DuringSiteMvp3c';
import DuringSiteMvp4Slide from '../duringSiteMvp/DuringSiteMvp4';
import DuringSiteMvp4bSlide from '../duringSiteMvp/DuringSiteMvp4b';
import DuringSiteMvp4cSlide from '../duringSiteMvp/DuringSiteMvp4c';
import DuringSiteMvp4dSlide from '../duringSiteMvp/DuringSiteMvp4d';
import DuringSiteMvp4eSlide from '../duringSiteMvp/DuringSiteMvp4e';
import DuringSiteMvp4fSlide from '../duringSiteMvp/DuringSiteMvp4f';
import DuringSiteMvp4gSlide from '../duringSiteMvp/DuringSiteMvp4g';
import DuringSiteMvp4hSlide from '../duringSiteMvp/DuringSiteMvp4h';
import DuringSiteMvp4iSlide from '../duringSiteMvp/DuringSiteMvp4i';
import DuringSiteMvp5Slide from '../duringSiteMvp/DuringSiteMvp5';
import DuringSiteMvp6Slide from '../duringSiteMvp/DuringSiteMvp6';
import DuringSiteMvp6bSlide from '../duringSiteMvp/DuringSiteMvp6b';
import DuringSiteMvp7Slide from '../duringSiteMvp/DuringSiteMvp7';
import DuringSiteMvp8Slide from '../duringSiteMvp/DuringSiteMvp8';
import DuringSiteMvp9Slide from '../duringSiteMvp/DuringSiteMvp9';
import DuringStack1Slide from '../duringStack/DuringStack1';
import DuringStack2Slide from '../duringStack/DuringStack2';
import DuringStack3Slide from '../duringStack/DuringStack3';
import DuringStack4Slide from '../duringStack/DuringStack4';
import DuringStack5Slide from '../duringStack/DuringStack5';
import DuringWhere1Slide from '../duringWhere/DuringWhere1';
import DuringWhere2Slide from '../duringWhere/DuringWhere2';
import DuringWhere2bSlide from '../duringWhere/DuringWhere2b';
import DuringWhere3Slide from '../duringWhere/DuringWhere3';
import DuringWhere4Slide from '../duringWhere/DuringWhere4';
import EndTitleSlide from '../EndTitle';
import Fairvioo1Slide from '../fairvioo/Fairvioo1';
import Fairvioo2Slide from '../fairvioo/Fairvioo2';
import Fairvioo3Slide from '../fairvioo/Fairvioo3';
import Fairvioo4Slide from '../fairvioo/Fairvioo4';
import Fairvioo4bSlide from '../fairvioo/Fairvioo4b';
import Fairvioo4cSlide from '../fairvioo/Fairvioo4c';
import Fairvioo4dSlide from '../fairvioo/Fairvioo4d';
import Fairvioo4eSlide from '../fairvioo/Fairvioo4e';
import Fairvioo4fSlide from '../fairvioo/Fairvioo4f';
import IntroductionSlide from '../Introduction';
import MainTitleSlide from '../MainTitle';
import Numbers1Slide from '../numbers/Numbers1';
import Numbers2Slide from '../numbers/Numbers2';
import Numbers3Slide from '../numbers/Numbers3';
import Numbers4Slide from '../numbers/Numbers4';
import Preface1Slide from '../preface/Preface1';
import Preface2Slide from '../preface/Preface2';
import Preface3Slide from '../preface/Preface3';
import Preface4Slide from '../preface/Preface4';
import SurveyResultSlide from '../SurveyResult';
import TimelineSlide from '../Timeline';

const meta = {
  title: 'Talks/HighwayToFail/Contents',
  component: SlideDeck,
} satisfies Meta<typeof SlideDeck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainTitle: Story = {
  args: {
    slides: [MainTitleSlide],
  },
};

export const Introduction: Story = {
  args: {
    slides: [IntroductionSlide],
  },
};

export const Fairvioo: Story = {
  args: {
    slides: [
      Fairvioo1Slide,
      Fairvioo2Slide,
      Fairvioo3Slide,
      Fairvioo4Slide,
      Fairvioo4bSlide,
      Fairvioo4cSlide,
      Fairvioo4dSlide,
      Fairvioo4eSlide,
      Fairvioo4fSlide,
    ],
    view: ViewTypes.print,
  },
};

export const Preface: Story = {
  args: {
    slides: [Preface1Slide, Preface2Slide, Preface3Slide, Preface4Slide],
    view: ViewTypes.print,
  },
};

export const Numbers: Story = {
  args: {
    slides: [Numbers1Slide, Numbers2Slide, Numbers3Slide, Numbers4Slide],
    view: ViewTypes.print,
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
    view: ViewTypes.print,
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
    view: ViewTypes.print,
  },
};

export const CreationSectionTitle: Story = {
  args: {
    slides: [CreationSectionTitleSlide],
  },
};

export const CreationContact: Story = {
  args: {
    slides: [CreationContact1Slide, CreationContact2Slide],
    view: ViewTypes.print,
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
    view: ViewTypes.print,
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
    view: ViewTypes.print,
  },
};

export const CreationMarket: Story = {
  args: {
    slides: [
      CreationMarket1Slide,
      CreationMarket2Slide,
      CreationMarket2bSlide,
      CreationMarket3Slide,
      CreationMarket4Slide,
      CreationMarket5Slide,
      CreationMarket5bSlide,
      CreationMarket5cSlide,
      CreationMarket5dSlide,
      CreationMarket6Slide,
      CreationMarket6bSlide,
      CreationMarket6cSlide,
      CreationMarket6dSlide,
    ],
    view: ViewTypes.print,
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
    view: ViewTypes.print,
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
    view: ViewTypes.print,
  },
};

export const DuringSectionTitle: Story = {
  args: {
    slides: [DuringSectionTitleSlide],
  },
};

export const DuringWhere: Story = {
  args: {
    slides: [
      DuringWhere1Slide,
      DuringWhere2Slide,
      DuringWhere2bSlide,
      DuringWhere3Slide,
      DuringWhere4Slide,
    ],
    view: ViewTypes.print,
  },
};

export const DuringEssec: Story = {
  args: {
    slides: [DuringEssec1Slide, DuringEssec2Slide, DuringEssec3Slide],
    view: ViewTypes.print,
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
    view: ViewTypes.print,
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
    view: ViewTypes.print,
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
    view: ViewTypes.print,
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
    view: ViewTypes.print,
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
    view: ViewTypes.print,
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
    view: ViewTypes.print,
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
    view: ViewTypes.print,
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
    view: ViewTypes.print,
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
    view: ViewTypes.print,
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
    view: ViewTypes.print,
  },
};

export const AfterSectionTitle: Story = {
  args: {
    slides: [AfterSectionTitleSlide],
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
    view: ViewTypes.print,
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
    view: ViewTypes.print,
  },
};

export const EndTitle: Story = {
  args: {
    slides: [EndTitleSlide],
  },
};
