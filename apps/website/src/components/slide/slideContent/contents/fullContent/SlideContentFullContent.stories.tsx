import { Box } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { SlideContentFullContent } from './SlideContentFullContent';
import { SlideContentTypes, colorMode } from '../../types';

const meta = {
  title: 'SlideDeck/SlideContent',
  component: SlideContentFullContent,

  decorators: [
    (Story) => (
      <Box width="800px" height="450px">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof SlideContentFullContent>;

export default meta;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type Story = StoryObj<typeof meta>;

const content = (
  <Box width="100%" height="100%" border="1px solid" borderColor="brand.500">
    Content
  </Box>
);

export const FullContentLight: Story = {
  args: {
    type: SlideContentTypes.fullContent,
    colormode: colorMode.light,
  },
  render: () => (
    <SlideContentFullContent
      colormode={colorMode.light}
      type={SlideContentTypes.fullContent}
    >
      {content}
    </SlideContentFullContent>
  ),
};

export const FullContentDark: Story = {
  args: {
    type: SlideContentTypes.fullContent,
    colormode: colorMode.dark,
  },
  render: () => (
    <SlideContentFullContent
      colormode={colorMode.dark}
      type={SlideContentTypes.fullContent}
    >
      {content}
    </SlideContentFullContent>
  ),
};
