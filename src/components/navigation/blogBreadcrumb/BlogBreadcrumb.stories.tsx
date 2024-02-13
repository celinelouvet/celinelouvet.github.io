import { Divider, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H2Heading } from '@/components/typography';

import { BlogBreadcrumb as BlogBreadcrumbComponent } from './BlogBreadcrumb';

const meta = {
  title: 'Theme/Navigation',
  component: BlogBreadcrumbComponent,
  args: {
    title: 'Article title',
  },
} satisfies Meta<typeof BlogBreadcrumbComponent>;

const sizes = ['md', 'sm'] as const;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlogBreadcrumb: Story = {
  render: (args) => (
    <Stack spacing={8}>
      <Grid templateColumns="70px 1fr" columnGap={8} alignItems={'baseline'}>
        <GridItem colSpan={2}>
          <H2Heading>Args</H2Heading>
        </GridItem>
        <GridItem>
          <Text fontWeight={600}>Default</Text>
        </GridItem>
        <GridItem>
          <BlogBreadcrumbComponent {...args} />
        </GridItem>
      </Grid>
      <Divider />
      <Grid templateColumns="70px 1fr" columnGap={8} alignItems={'baseline'}>
        <GridItem colSpan={2}>
          <H2Heading>Sizes</H2Heading>
        </GridItem>
        {sizes.map((size) => (
          <>
            <GridItem>
              <Text fontWeight={700}>{size}</Text>
            </GridItem>
            <GridItem>
              <BlogBreadcrumbComponent size={size} {...args} />
            </GridItem>
          </>
        ))}
      </Grid>
    </Stack>
  ),
};
