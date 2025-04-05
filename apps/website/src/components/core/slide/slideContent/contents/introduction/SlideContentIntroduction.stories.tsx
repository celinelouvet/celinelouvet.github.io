import { Box } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { highwayToFailTalkFr as talk } from '@/data/talks';

import { SlideContentIntroduction } from './SlideContentIntroduction';
import { SlideContentTypes } from '../../types';

const meta = {
  title: 'SlideDeck/SlideContent',
  component: SlideContentIntroduction,

  decorators: [
    (Story) => (
      <Box width="800px" height="450px">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof SlideContentIntroduction>;

export default meta;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type Story = StoryObj<typeof meta>;

export const Introduction: Story = {
  args: {
    type: SlideContentTypes.introduction,
    author: talk.author,
    descriptions: talk.descriptions,
    socials: talk.socials,
  },
};
