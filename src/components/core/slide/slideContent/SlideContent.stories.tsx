import { type Meta, type StoryObj } from '@storybook/react';

import { SlideContent as SlideContentComponent } from './SlideContent';

const meta = {
  title: 'SlideDeck/SlideContent',
  component: SlideContentComponent,
  args: {
    children: 'That’s the content',
  },
} satisfies Meta<typeof SlideContentComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SlideContent: Story = {};
