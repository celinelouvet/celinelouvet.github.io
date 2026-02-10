import { Box } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { SlideContentSectionTitleWithThinColumn } from './SlideContentSectionTitleWithThinColumn';
import { SlideContentTypes } from '../../types';

const meta = {
  title: 'SlideDeck/SlideContent',
  component: SlideContentSectionTitleWithThinColumn,

  decorators: [
    (Story) => (
      <Box width="800px" height="450px">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof SlideContentSectionTitleWithThinColumn>;

export default meta;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type Story = StoryObj<typeof meta>;

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

export const SectionTitleWithThinColumn: Story = {
  args: {
    type: SlideContentTypes.sectionTitleWithThinColumn,
    title: 'Section Title',
    column1,
    children: content,
  },
  render: () => (
    <SlideContentSectionTitleWithThinColumn
      type={SlideContentTypes.sectionTitleWithThinColumn}
      title="Section Title"
      column1={column1}
    >
      {content}
    </SlideContentSectionTitleWithThinColumn>
  ),
};
