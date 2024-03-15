import { type Meta, type StoryObj } from '@storybook/react';

import { highwayToFail } from '@/components/slideDecks/highwayToFail';

import { SlideContent as SlideContentComponent } from './SlideContent';
import { SlideContentTypes } from './types';

const meta = {
  title: 'SlideDeck/SlideContent',
  component: SlideContentComponent,
} satisfies Meta<typeof SlideContentComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    type: SlideContentTypes.title,
    title: highwayToFail.title,
    author: highwayToFail.author,
  },
};
