import { type Meta, type StoryObj } from '@storybook/react';

import { SlideTimer as SlideTimerComponent } from './SlideTimer';

const meta = {
  title: 'SlideDeck/SlideTimer',
  component: SlideTimerComponent,
} satisfies Meta<typeof SlideTimerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SlideTimer: Story = {};
