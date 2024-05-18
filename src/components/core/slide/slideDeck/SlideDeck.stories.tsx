import { type Meta, type StoryObj } from '@storybook/react';

import {
  type Slide,
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from '@/components/core';

import { SlideDeck as SlideDeckComponent, ViewTypes } from './SlideDeck';

const maxSlides = 5;

const slides: Slide[] = [];

for (let i = 0; i < maxSlides; i++) {
  slides.push({
    content: (
      <SlideContent
        type={SlideContentTypes.title}
        title={`Title ${i + 1}`}
        author="Author"
      ></SlideContent>
    ),
    note: <SlideNote minutes={i + 1}>Note {i + 1}</SlideNote>,
  });
}

const meta = {
  title: 'SlideDeck/SlideDeck',
  component: SlideDeckComponent,
} satisfies Meta<typeof SlideDeckComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    slides,
    view: ViewTypes.content,
  },
};

export const Notes: Story = {
  args: {
    slides,
    view: ViewTypes.notes,
  },
};

export const Print: Story = {
  args: {
    slides,
    view: ViewTypes.print,
  },
};

export const PrintNotes: Story = {
  args: {
    slides,
    view: ViewTypes.printNotes,
  },
};
