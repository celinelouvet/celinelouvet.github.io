import { ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { SlideContent, SlideNote } from '@/components/core';

import { SlideDeck as SlideDeckComponent } from './SlideDeck';

const maxSlides = 5;

const contentExample = <Text key="text">Big example</Text>;

const noteExample = (
  <SlideNote key="text" minutes={2} seconds={56}>
    <UnorderedList>
      <ListItem>
        Qui a eu envie un jour de se lancer dans la création de startup ?
      </ListItem>
      <ListItem>Parmi les personnes qui ont dit oui, qui l’a fait ?</ListItem>
      <ListItem>
        Parmi celleux qui se sont lancés, est ce que vous considérez avoir
        réussi votre pari ?
      </ListItem>
      <ListItem>
        Parmi celleux qui ne se sont pas lancés, est ce parce que vous craignez
        l’échec ?
      </ListItem>
    </UnorderedList>
  </SlideNote>
);

const contents: React.ReactNode[] = [contentExample];
const notes: React.ReactNode[] = [noteExample];

for (let i = 0; i < maxSlides; i++) {
  contents.push(<SlideContent key={i}>Content {i + 1}</SlideContent>);
  notes.push(
    <SlideNote key={i} minutes={i + 1}>
      Note {i + 1}
    </SlideNote>
  );
}

const meta = {
  title: 'SlideDeck/SlideDeck',
  component: SlideDeckComponent,
} satisfies Meta<typeof SlideDeckComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    children: contents,
    forNotes: false,
  },
};

export const Notes: Story = {
  args: {
    children: notes,
    forNotes: true,
  },
};
