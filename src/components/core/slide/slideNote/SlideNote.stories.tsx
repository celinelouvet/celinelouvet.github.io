import { type Meta, type StoryObj } from '@storybook/react';

import { SlideNote as SlideNoteComponent } from './SlideNote';

const meta = {
  title: 'SlideDeck/SlideNote',
  component: SlideNoteComponent,
  args: {
    hours: 5,
    minutes: 10,
    children: 'That’s a note',
  },
} satisfies Meta<typeof SlideNoteComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SlideNote: Story = {};
