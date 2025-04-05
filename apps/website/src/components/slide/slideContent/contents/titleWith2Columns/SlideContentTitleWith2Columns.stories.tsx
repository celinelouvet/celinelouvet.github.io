import { Box } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { SlideContentTitleWith2Columns as SlideContentTitleWith2Columns } from './SlideContentTitleWith2Columns';
import { SlideContentTypes } from '../../types';

const meta = {
  title: 'SlideDeck/SlideContent',
  component: SlideContentTitleWith2Columns,

  decorators: [
    (Story) => (
      <Box width="800px" height="450px">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof SlideContentTitleWith2Columns>;

export default meta;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type Story = StoryObj<typeof meta>;

const topRightCorner = 'Top right corner';

const column1 = (
  <Box width="100%" height="100%" border="1px solid" borderColor="brand.500">
    Column 1
  </Box>
);

const content = (
  <Box width="100%" height="100%" border="1px solid" borderColor="brand.500">
    Content
  </Box>
);

export const TitleWith2Columns: Story = {
  args: {
    type: SlideContentTypes.titleWith2Columns,
    title: 'Title with 2 columns',
  },
  render: () => (
    <SlideContentTitleWith2Columns
      type={SlideContentTypes.titleWith2Columns}
      title="Title with 2 columns"
      column1={column1}
      topRightCorner={topRightCorner}
    >
      {content}
    </SlideContentTitleWith2Columns>
  ),
};
