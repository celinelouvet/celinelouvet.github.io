import { Box } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { SlideContentTitleWithThin2Columns } from './SlideContentTitleWithThin2Columns';
import { SlideContentTypes } from '../../types';

const meta = {
  title: 'SlideDeck/SlideContent',
  component: SlideContentTitleWithThin2Columns,

  decorators: [
    (Story) => (
      <Box width="800px" height="450px">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof SlideContentTitleWithThin2Columns>;

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

const column2 = (
  <Box width="100%" height="100%" border="1px solid" borderColor="brand.500">
    Column 2
  </Box>
);

const content = (
  <Box width="100%" height="100%" border="1px solid" borderColor="brand.500">
    Content
  </Box>
);

export const TitleWithThinColumn2Columns: Story = {
  args: {
    type: SlideContentTypes.titleWithThin2Columns,
    title: 'Title with 1 thin column and 2 columns',
  },
  render: () => (
    <SlideContentTitleWithThin2Columns
      type={SlideContentTypes.titleWithThin2Columns}
      title="Title with 1 thin column and 2 columns"
      column1={column1}
      column2={column2}
      topRightCorner={topRightCorner}
    >
      {content}
    </SlideContentTitleWithThin2Columns>
  ),
};
