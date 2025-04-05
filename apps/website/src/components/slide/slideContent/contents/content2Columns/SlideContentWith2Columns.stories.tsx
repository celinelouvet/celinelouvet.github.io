import { Box } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { SlideContentWith2Columns } from './SlideContentWith2Columns';
import { ColorMode, SlideContentTypes } from '../../types';

const meta = {
  title: 'SlideDeck/SlideContent',
  component: SlideContentWith2Columns,

  decorators: [
    (Story) => (
      <Box width="800px" height="450px">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof SlideContentWith2Columns>;

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

export const ContentWith2ColumnsLight: Story = {
  args: {
    colormode: ColorMode.light,
    type: SlideContentTypes.content2Columns,
  },
  render: () => (
    <SlideContentWith2Columns
      colormode={ColorMode.light}
      type={SlideContentTypes.content2Columns}
      column1={column1}
    >
      {content}
    </SlideContentWith2Columns>
  ),
};

export const ContentWith2ColumnsDark: Story = {
  args: {
    colormode: ColorMode.dark,
    type: SlideContentTypes.content2Columns,
  },
  render: () => (
    <SlideContentWith2Columns
      colormode={ColorMode.dark}
      type={SlideContentTypes.content2Columns}
      column1={column1}
    >
      {content}
    </SlideContentWith2Columns>
  ),
};
