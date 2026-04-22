import { type Meta, type StoryObj } from '@storybook/react';

import { SlideDeck, ViewTypes } from 'src/components/slide';

import { slides } from './slides';

const meta = {
  title: 'Talks/HighwayToFail/Notes',
  component: SlideDeck,
  args: {
    view: ViewTypes.printNotes,
    slides: [],
  },
} satisfies Meta<typeof SlideDeck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preface: Story = {
  render: () => {
    return <SlideDeck view={ViewTypes.printNotes} slides={slides} />;
  },
};
