import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck } from '@/components/core';

import { content as AbstractContent } from './Abstract';
import { content as BeforeCC1Content } from './BeforeCC1';
import { content as BeforeCC2Content } from './BeforeCC2';
import { content as BeforeCC3Content } from './BeforeCC3';
import { content as BeforeCC4Content } from './BeforeCC4';
import { content as BeforeCC5Content } from './BeforeCC5';
import { content as BeforeMe1Content } from './BeforeMe1';
import { content as BeforeMe2Content } from './BeforeMe2';
import { content as BeforeMe3Content } from './BeforeMe3';
import { content as BeforeTimelineSectionTitleContent } from './BeforeSectionTitle';
import { content as CreationContact1Content } from './CreationContact1';
import { content as CreationContact2Content } from './CreationContact2';
import { content as CreationIdea1Content } from './CreationIdea1';
import { content as CreationIdea2Content } from './CreationIdea2';
import { content as CreationIdea3Content } from './CreationIdea3';
import { content as CreationIdea4Content } from './CreationIdea4';
import { content as CreationIdea5Content } from './CreationIdea5';
import { content as CreationIdea6Content } from './CreationIdea6';
import { content as CreationIdea7Content } from './CreationIdea7';
import { content as CreationIdea8Content } from './CreationIdea8';
import { content as CreationMarket1Content } from './CreationMarket1';
import { content as CreationMarket2Content } from './CreationMarket2';
import { content as CreationMarket3Content } from './CreationMarket3';
import { content as CreationMarket4Content } from './CreationMarket4';
import { content as CreationMarket5Content } from './CreationMarket5';
import { content as CreationMarket6Content } from './CreationMarket6';
import { content as CreationMeeting1Content } from './CreationMeeting1';
import { content as CreationMeeting2Content } from './CreationMeeting2';
import { content as CreationMeeting3Content } from './CreationMeeting3';
import { content as CreationMeeting4Content } from './CreationMeeting4';
import { content as CreationMeeting5Content } from './CreationMeeting5';
import { content as CreationSectionTitleContent } from './CreationSectionTitle';
import { content as EndTitleContent } from './EndTitle';
import { content as Fairvioo1Content } from './Fairvioo1';
import { content as Fairvioo2Content } from './Fairvioo2';
import { content as Fairvioo3Content } from './Fairvioo3';
import { content as Fairvioo4Content } from './Fairvioo4';
import { content as IntroductionContent } from './Introduction';
import { content as MainTitleContent } from './MainTitle';
import { content as Numbers1Content } from './Numbers1';
import { content as Numbers2Content } from './Numbers2';
import { content as Numbers3Content } from './Numbers3';
import { content as Numbers4Content } from './Numbers4';
import { content as Preface1Content } from './Preface1';
import { content as Preface2Content } from './Preface2';
import { content as Preface3Content } from './Preface3';
import { content as Preface4Content } from './Preface4';
import { content as PromotionLyonCraftContent } from './PromotionLyonCraft';
import { content as SurveySectionTitleContent } from './SurveySectionTitle';
import { content as TimelineContent } from './Timeline';

const meta = {
  title: 'Talks/HighwayToFail',
  component: SlideDeck,
} satisfies Meta<typeof SlideDeck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Abstract: Story = {
  render: () => <SlideDeck>{AbstractContent}</SlideDeck>,
};

export const PromotionLyonCraft: Story = {
  render: () => <SlideDeck>{PromotionLyonCraftContent}</SlideDeck>,
};

export const MainTitle: Story = {
  render: () => <SlideDeck>{MainTitleContent}</SlideDeck>,
};

export const SurveySectionTitle: Story = {
  render: () => <SlideDeck>{SurveySectionTitleContent}</SlideDeck>,
};

export const Introduction: Story = {
  render: () => <SlideDeck>{IntroductionContent}</SlideDeck>,
};

export const Fairvioo1: Story = {
  render: () => <SlideDeck>{Fairvioo1Content}</SlideDeck>,
};

export const Fairvioo2: Story = {
  render: () => <SlideDeck>{Fairvioo2Content}</SlideDeck>,
};

export const Fairvioo3: Story = {
  render: () => <SlideDeck>{Fairvioo3Content}</SlideDeck>,
};

export const Fairvioo4: Story = {
  render: () => <SlideDeck>{Fairvioo4Content}</SlideDeck>,
};

export const Preface1: Story = {
  render: () => <SlideDeck>{Preface1Content}</SlideDeck>,
};

export const Preface2: Story = {
  render: () => <SlideDeck>{Preface2Content}</SlideDeck>,
};

export const Preface3: Story = {
  render: () => <SlideDeck>{Preface3Content}</SlideDeck>,
};

export const Preface4: Story = {
  render: () => <SlideDeck>{Preface4Content}</SlideDeck>,
};

export const Numbers1: Story = {
  render: () => <SlideDeck>{Numbers1Content}</SlideDeck>,
};

export const Numbers2: Story = {
  render: () => <SlideDeck>{Numbers2Content}</SlideDeck>,
};

export const Numbers3: Story = {
  render: () => <SlideDeck>{Numbers3Content}</SlideDeck>,
};

export const Numbers4: Story = {
  render: () => <SlideDeck>{Numbers4Content}</SlideDeck>,
};

export const Timeline: Story = {
  render: () => <SlideDeck>{TimelineContent}</SlideDeck>,
};

export const BeforeTimelineSectionTitle: Story = {
  render: () => <SlideDeck>{BeforeTimelineSectionTitleContent}</SlideDeck>,
};

export const BeforeMe1: Story = {
  render: () => <SlideDeck>{BeforeMe1Content}</SlideDeck>,
};

export const BeforeMe2: Story = {
  render: () => <SlideDeck>{BeforeMe2Content}</SlideDeck>,
};

export const BeforeMe3: Story = {
  render: () => <SlideDeck>{BeforeMe3Content}</SlideDeck>,
};

export const BeforeCaptainContrat1: Story = {
  render: () => <SlideDeck>{BeforeCC1Content}</SlideDeck>,
};

export const BeforeCaptainContrat2: Story = {
  render: () => <SlideDeck>{BeforeCC2Content}</SlideDeck>,
};

export const BeforeCaptainContrat3: Story = {
  render: () => <SlideDeck>{BeforeCC3Content}</SlideDeck>,
};

export const BeforeCaptainContrat4: Story = {
  render: () => <SlideDeck>{BeforeCC4Content}</SlideDeck>,
};

export const BeforeCaptainContrat5: Story = {
  render: () => <SlideDeck>{BeforeCC5Content}</SlideDeck>,
};

export const CreationSectionTitle: Story = {
  render: () => <SlideDeck>{CreationSectionTitleContent}</SlideDeck>,
};

export const CreationContact1: Story = {
  render: () => <SlideDeck>{CreationContact1Content}</SlideDeck>,
};

export const CreationContact2: Story = {
  render: () => <SlideDeck>{CreationContact2Content}</SlideDeck>,
};

export const CreationMeeting1: Story = {
  render: () => <SlideDeck>{CreationMeeting1Content}</SlideDeck>,
};

export const CreationMeeting2: Story = {
  render: () => <SlideDeck>{CreationMeeting2Content}</SlideDeck>,
};

export const CreationMeeting3: Story = {
  render: () => <SlideDeck>{CreationMeeting3Content}</SlideDeck>,
};

export const CreationMeeting4: Story = {
  render: () => <SlideDeck>{CreationMeeting4Content}</SlideDeck>,
};

export const CreationMeeting5: Story = {
  render: () => <SlideDeck>{CreationMeeting5Content}</SlideDeck>,
};

export const CreationIdea1: Story = {
  render: () => <SlideDeck>{CreationIdea1Content}</SlideDeck>,
};

export const CreationIdea2: Story = {
  render: () => <SlideDeck>{CreationIdea2Content}</SlideDeck>,
};

export const CreationIdea3: Story = {
  render: () => <SlideDeck>{CreationIdea3Content}</SlideDeck>,
};

export const CreationIdea4: Story = {
  render: () => <SlideDeck>{CreationIdea4Content}</SlideDeck>,
};

export const CreationIdea5: Story = {
  render: () => <SlideDeck>{CreationIdea5Content}</SlideDeck>,
};

export const CreationIdea6: Story = {
  render: () => <SlideDeck>{CreationIdea6Content}</SlideDeck>,
};

export const CreationIdea7: Story = {
  render: () => <SlideDeck>{CreationIdea7Content}</SlideDeck>,
};

export const CreationIdea8: Story = {
  render: () => <SlideDeck>{CreationIdea8Content}</SlideDeck>,
};

export const CreationMarket1: Story = {
  render: () => <SlideDeck>{CreationMarket1Content}</SlideDeck>,
};

export const CreationMarket2: Story = {
  render: () => <SlideDeck>{CreationMarket2Content}</SlideDeck>,
};

export const CreationMarket3: Story = {
  render: () => <SlideDeck>{CreationMarket3Content}</SlideDeck>,
};

export const CreationMarket4: Story = {
  render: () => <SlideDeck>{CreationMarket4Content}</SlideDeck>,
};

export const CreationMarket5: Story = {
  render: () => <SlideDeck>{CreationMarket5Content}</SlideDeck>,
};

export const CreationMarket6: Story = {
  render: () => <SlideDeck>{CreationMarket6Content}</SlideDeck>,
};

export const EndTitle: Story = {
  render: () => <SlideDeck>{EndTitleContent}</SlideDeck>,
};
