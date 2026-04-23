import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck, ViewTypes } from 'src/components/slide';

import ArchitecturesSlides from '../architectures';
import DecisionEnforcementSlides from '../decisionEnforcement';
import ExampleSlides from '../example';
import IdentityVsPermissionsSlides from '../identityVsPermissions';
import NotionsSlides from '../importantNotions';
import IntroductionSlides from '../introduction';
import MainTitleSlides from '../mainTitle';
import { getSlides } from '../slides';
import WhichRuleSlides from '../whichRule';
import WhySlides from '../why';

const meta = {
  title: 'Talks/PermissionsMysteries/Contents',
  component: SlideDeck,
  args: {
    view: ViewTypes.print,
    slides: [],
  },
} satisfies Meta<typeof SlideDeck>;

export default meta;
export type Story = StoryObj<typeof meta>;

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

export const Introduction: Story = {
  render: () => {
    const slides = IntroductionSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const Example: Story = {
  render: () => {
    const slides = ExampleSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const Why: Story = {
  render: () => {
    const slides = WhySlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const IdentityVsPermissions: Story = {
  render: () => {
    const slides = IdentityVsPermissionsSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const WhichRule: Story = {
  render: () => {
    const slides = WhichRuleSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const Notions: Story = {
  render: () => {
    const slides = NotionsSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const DecisionEnforcement: Story = {
  render: () => {
    const slides = DecisionEnforcementSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};

export const Architectures: Story = {
  render: () => {
    const slides = ArchitecturesSlides;
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};
