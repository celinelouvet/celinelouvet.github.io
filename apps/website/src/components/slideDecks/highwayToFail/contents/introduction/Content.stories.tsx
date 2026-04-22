import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck, ViewTypes } from 'src/components/slide';

import { slides } from './slides';

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

export const Introduction: Story = {
  render: () => {
    return <SlideDeck view={ViewTypes.print} slides={slides} />;
  },
};
