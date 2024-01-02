import { Grid, GridItem, Heading, Tag } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import {
  H1Heading,
  H2Heading,
  H3Heading,
  H4Heading,
  H5Heading,
} from '@/components/typography';

import { h1HeadingStyles } from './H1Heading';
import { h2HeadingStyles } from './H2Heading';
import { h3HeadingStyles } from './H3Heading';
import { h4HeadingStyles } from './H4Heading';
import { h5HeadingStyles } from './H5Heading';

const meta = {
  title: 'Theme/Typography',
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  render: () => (
    <Grid templateColumns="50px 200px 250px" gap={4}>
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
        <H1Heading>H1 - {h1HeadingStyles.sizes.md.fontSize}</H1Heading>
      </GridItem>
      <GridItem>
        <H1Heading size="lg">
          H1 - {h1HeadingStyles.sizes.lg.fontSize}
        </H1Heading>
      </GridItem>

      <GridItem>
        <Tag size="lg">H2</Tag>
      </GridItem>
      <GridItem>
        <H2Heading>H2 - {h2HeadingStyles.sizes.md.fontSize}</H2Heading>
      </GridItem>
      <GridItem>
        <H2Heading size="lg">
          H2 - {h2HeadingStyles.sizes.lg.fontSize}
        </H2Heading>
      </GridItem>

      <GridItem>
        <Tag size="lg">H3</Tag>
      </GridItem>
      <GridItem>
        <H3Heading>H3 - {h3HeadingStyles.sizes.md.fontSize}</H3Heading>
      </GridItem>
      <GridItem>
        <H3Heading size="lg">
          H3 - {h3HeadingStyles.sizes.lg.fontSize}
        </H3Heading>
      </GridItem>

      <GridItem>
        <Tag size="lg">H4</Tag>
      </GridItem>
      <GridItem>
        <H4Heading>H4 - {h4HeadingStyles.sizes.md.fontSize}</H4Heading>
      </GridItem>
      <GridItem>
        <H4Heading size="lg">
          H4 - {h4HeadingStyles.sizes.lg.fontSize}
        </H4Heading>
      </GridItem>

      <GridItem>
        <Tag size="lg">H5</Tag>
      </GridItem>
      <GridItem>
        <H5Heading>H5 - {h5HeadingStyles.sizes.md.fontSize}</H5Heading>
      </GridItem>
      <GridItem>
        <H5Heading size="lg">
          H5 - {h5HeadingStyles.sizes.lg.fontSize}
        </H5Heading>
      </GridItem>
    </Grid>
  ),
};
