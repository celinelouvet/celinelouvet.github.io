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

export const EndTitle: Story = {
  args: {
    slides: [EndTitleSlide],
  },
};
