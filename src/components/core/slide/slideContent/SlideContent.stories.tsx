import { Box } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { highwayToFailTalkFr as talk } from '@/data/talks';

import { SlideContent as SlideContentComponent } from './SlideContent';
import { ColorMode, SlideContentTypes } from './types';

const meta = {
  title: 'SlideDeck/SlideContent',
  component: SlideContentComponent,

  render: (args) => (
    <Box width="800px" height="450px">
      <SlideContentComponent {...args} />
    </Box>
  ),
} satisfies Meta<typeof SlideContentComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContentWith2ColumnsLight: Story = {
  args: {
    type: SlideContentTypes.content2Columns,
    colormode: ColorMode.light,
    column1: (
      <Box
        width="100%"
        height="100%"
        border="1px solid"
        borderColor="brand.500"
      >
        Column 1
      </Box>
    ),
    children: (
      <Box
        width="100%"
        height="100%"
        border="1px solid"
        borderColor="brand.500"
      >
        Content
      </Box>
    ),
  },
};

export const ContentWith2ColumnsDark: Story = {
  args: {
    type: SlideContentTypes.content2Columns,
    colormode: ColorMode.dark,
    column1: (
      <Box
        width="100%"
        height="100%"
        border="1px solid"
        borderColor="brand.500"
      >
        Column 1
      </Box>
    ),
    children: (
      <Box
        width="100%"
        height="100%"
        border="1px solid"
        borderColor="brand.500"
      >
        Content
      </Box>
    ),
  },
};

export const EndTitle: Story = {
  args: {
    type: SlideContentTypes.endTitle,
  },
};

export const Introduction: Story = {
  args: {
    type: SlideContentTypes.introduction,
    author: talk.author,
    descriptions: talk.descriptions,
    socials: talk.socials,
  },
};

export const Title: Story = {
  args: {
    type: SlideContentTypes.title,
    title: talk.title,
    author: talk.author,
  },
};

export const FullContentLight: Story = {
  args: {
    type: SlideContentTypes.fullContent,
    colormode: ColorMode.light,

    children: (
      <Box
        width="100%"
        height="100%"
        border="1px solid"
        borderColor="brand.500"
      >
        Content
      </Box>
    ),
  },
};

export const FullContentDark: Story = {
  args: {
    type: SlideContentTypes.fullContent,
    colormode: ColorMode.dark,

    children: (
      <Box
        width="100%"
        height="100%"
        border="1px solid"
        borderColor="brand.500"
      >
        Content
      </Box>
    ),
  },
};

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

export const Abstract: Story = {
  args: {
    type: SlideContentTypes.abstract,
    topic: 'Title',
    descriptions: ['Line 1', 'Line 2', 'Line 3'],
  },
};

export const SectionTitle: Story = {
  args: {
    type: SlideContentTypes.sectionTitle,
    title: 'Section Title',
  },
};

export const SectionTitleWithThinColumn: Story = {
  args: {
    type: SlideContentTypes.sectionTitleWithThinColumn,
    title: 'Section Title',
    column1: (
      <Box
        width="100%"
        height="100%"
        border="1px solid"
        borderColor="brand.500"
      >
        Column 1
      </Box>
    ),
  },
};

export const TitleWithContent: Story = {
  args: {
    type: SlideContentTypes.titleWithContent,
    title: 'Title with content',
    children: (
      <Box
        width="100%"
        height="100%"
        border="1px solid"
        borderColor="brand.500"
      >
        Content
      </Box>
    ),
  },
};

export const TitleWith2Columns: Story = {
  args: {
    type: SlideContentTypes.titleWith2Columns,
    title: 'Title with 2 columns',
    column1: (
      <Box
        width="100%"
        height="100%"
        border="1px solid"
        borderColor="brand.500"
      >
        Column 1
      </Box>
    ),
    children: (
      <Box
        width="100%"
        height="100%"
        border="1px solid"
        borderColor="brand.500"
      >
        Content
      </Box>
    ),
  },
};

export const TitleWithThinColumn: Story = {
  args: {
    type: SlideContentTypes.titleWithThinColumn,
    title: 'Title with 1 thin column',
    column1: (
      <Box
        width="100%"
        height="100%"
        border="1px solid"
        borderColor="brand.500"
      >
        Column 1
      </Box>
    ),
    children: (
      <Box
        width="100%"
        height="100%"
        border="1px solid"
        borderColor="brand.500"
      >
        Content
      </Box>
    ),
  },
};

export const TitleWithThinColumn2Columns: Story = {
  args: {
    type: SlideContentTypes.titleWithThin2Columns,
    title: 'Title with 1 thin column and 2 columns',
    column1: (
      <Box
        width="100%"
        height="100%"
        border="1px solid"
        borderColor="brand.500"
      >
        Column 1
      </Box>
    ),
    column2: (
      <Box
        width="100%"
        height="100%"
        border="1px solid"
        borderColor="brand.500"
      >
        Column 2
      </Box>
    ),
    children: (
      <Box
        width="100%"
        height="100%"
        border="1px solid"
        borderColor="brand.500"
      >
        Children
      </Box>
    ),
  },
};
