import { Box } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { highwayToFailTalkFr as talk } from 'src/data/talks';

import { SlideContentPromotion } from './SlideContentPromotion';
import { SlideContentTypes } from '../../types';

const meta = {
  title: 'SlideDeck/SlideContent',
  component: SlideContentPromotion,

  decorators: [
    (Story) => (
      <Box width="800px" height="450px">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof SlideContentPromotion>;

export default meta;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type Story = StoryObj<typeof meta>;

export const Promotion: Story = {
  args: {
    type: SlideContentTypes.promotion,
    author: talk.author,
    title: talk.title,
    convention: 'Lyon Craft',
    time: '2024-04-08T10:30:00Z',
    room: 'Room 1',
  },
};
