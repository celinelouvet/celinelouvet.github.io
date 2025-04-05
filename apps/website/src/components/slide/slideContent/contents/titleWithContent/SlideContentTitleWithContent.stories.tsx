import { Box } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { SlideContentTitleWithContent } from './SlideContentTitleWithContent';
import { SlideContentTypes } from '../../types';

const meta = {
  title: 'SlideDeck/SlideContent',
  component: SlideContentTitleWithContent,

  decorators: [
    (Story) => (
      <Box width="800px" height="450px">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof SlideContentTitleWithContent>;

export default meta;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type Story = StoryObj<typeof meta>;

const topRightCorner = 'Top right corner';

const content = (
  <Box width="100%" height="100%" border="1px solid" borderColor="brand.500">
    Content
  </Box>
);

export const TitleWithContent: Story = {
  args: {
    type: SlideContentTypes.titleWithContent,
    title: 'Title with content',
  },
  render: () => (
    <SlideContentTitleWithContent
      type={SlideContentTypes.titleWithContent}
      title="Title with content"
      topRightCorner={topRightCorner}
    >
      {content}
    </SlideContentTitleWithContent>
  ),
};
