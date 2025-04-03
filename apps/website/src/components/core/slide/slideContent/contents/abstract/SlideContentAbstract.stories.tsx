import { Box } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { SlideContentAbstract } from './SlideContentAbstract';
import { SlideContentTypes } from '../../types';

const meta = {
  title: 'SlideDeck/SlideContent',
  component: SlideContentAbstract,

  decorators: [
    (Story) => (
      <Box width="800px" height="450px">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof SlideContentAbstract>;

export default meta;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type Story = StoryObj<typeof meta>;

export const Abstract: Story = {
  args: {
    type: SlideContentTypes.abstract,
    topic: 'Title',
    descriptions: ['Line 1', 'Line 2', 'Line 3'],
  },
};
