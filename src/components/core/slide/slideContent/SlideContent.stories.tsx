import { Box } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { highwayToFail } from '@/components/slideDecks/highwayToFail';

import { SlideContent as SlideContentComponent } from './SlideContent';
import { ColorMode, SlideContentTypes } from './types';

const meta = {
  title: 'SlideDeck/SlideContent',
  component: SlideContentComponent,
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
    author: highwayToFail.author,
    descriptions: highwayToFail.descriptions,
    socials: highwayToFail.socials,
  },
};

export const Title: Story = {
  args: {
    type: SlideContentTypes.title,
    title: highwayToFail.title,
    author: highwayToFail.author,
  },
};

export const Promotion: Story = {
  args: {
    type: SlideContentTypes.promotion,
    author: highwayToFail.author,
    title: highwayToFail.title,
    convention: 'Lyon Craft',
    time: '2024-04-08T10:30:00Z',
    room: 'Room 1',
  },
};

export const Abstract: Story = {
  args: {
    type: SlideContentTypes.abstract,
    topic: highwayToFail.abstract.title,
    descriptions: highwayToFail.abstract.descriptions,
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
