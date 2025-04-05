import { Box } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { highwayToFailTalkFr as talk } from '@/data/talks';

import { SlideContentMainTitle } from './SlideContentMainTitle';
import { SlideContentTypes } from '../../types';

const meta = {
  title: 'SlideDeck/SlideContent',
  component: SlideContentMainTitle,

  decorators: [
    (Story) => (
      <Box width="800px" height="450px">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof SlideContentMainTitle>;

export default meta;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    type: SlideContentTypes.title,
    title: talk.title,
    author: talk.author,
  },
};
