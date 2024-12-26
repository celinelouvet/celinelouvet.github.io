import { Grid, GridItem, Heading } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Tag } from '@/components/ui/tag';

import { H1Heading, h1HeadingRecipe } from './h1Heading';
import { H2Heading, h2HeadingRecipe } from './h2Heading';
import { H3Heading, h3HeadingRecipe } from './h3Heading';
import { H4Heading, h4HeadingRecipe } from './h4Heading';
import { H5Heading, h5HeadingRecipe } from './h5Heading';

const meta = {
  title: 'Core/Typography',
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

const h1Sizes = h1HeadingRecipe.variants?.size;
const h2Sizes = h2HeadingRecipe.variants?.size;
const h3Sizes = h3HeadingRecipe.variants?.size;
const h4Sizes = h4HeadingRecipe.variants?.size;
const h5Sizes = h5HeadingRecipe.variants?.size;

export const Headings: Story = {
  render: () => (
    <Grid templateColumns="50px 200px 250px" gap="4">
      <GridItem></GridItem>
      <GridItem>
        <Tag size="lg">md</Tag>
      </GridItem>
      <GridItem>
        <Tag size="lg">lg</Tag>
      </GridItem>

      <GridItem>
        <Tag size="lg">H1</Tag>
      </GridItem>
      <GridItem>
        <H1Heading>H1 - {h1Sizes?.md.fontSize}</H1Heading>
      </GridItem>
      <GridItem>
        <H1Heading size="lg">H1 - {h1Sizes?.lg.fontSize}</H1Heading>
      </GridItem>

      <GridItem>
        <Tag size="lg">H2</Tag>
      </GridItem>
      <GridItem>
        <H2Heading>H2 - {h2Sizes?.md.fontSize}</H2Heading>
      </GridItem>
      <GridItem>
        <H2Heading size="lg">H2 - {h2Sizes?.lg.fontSize}</H2Heading>
      </GridItem>

      <GridItem>
        <Tag size="lg">H3</Tag>
      </GridItem>
      <GridItem>
        <H3Heading>H3 - {h3Sizes?.md.fontSize}</H3Heading>
      </GridItem>
      <GridItem>
        <H3Heading size="lg">H3 - {h3Sizes?.lg.fontSize}</H3Heading>
      </GridItem>

      <GridItem>
        <Tag size="lg">H4</Tag>
      </GridItem>
      <GridItem>
        <H4Heading>H4 - {h4Sizes?.md.fontSize}</H4Heading>
      </GridItem>
      <GridItem>
        <H4Heading size="lg">H4 - {h4Sizes?.lg.fontSize}</H4Heading>
      </GridItem>

      <GridItem>
        <Tag size="lg">H5</Tag>
      </GridItem>
      <GridItem>
        <H5Heading>H5 - {h5Sizes?.md.fontSize}</H5Heading>
      </GridItem>
      <GridItem>
        <H5Heading size="lg">H5 - {h5Sizes?.lg.fontSize}</H5Heading>
      </GridItem>
    </Grid>
  ),
};
