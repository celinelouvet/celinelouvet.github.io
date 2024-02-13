import { Divider, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H2Heading } from '@/components/typography';

import {
  InternalLink as InternalLinkComponent,
  internalLinkStyles,
} from './InternalLink';

const meta = {
  title: 'Theme/Navigation',
  component: InternalLinkComponent,
} satisfies Meta<typeof InternalLinkComponent>;

const sizes = ['md', 'sm'] as const;

export default meta;
type Story = StoryObj<typeof meta>;

export const InternalLink: Story = {
  render: () => (
    <Stack spacing={8}>
      <Grid templateColumns="70px 1fr" columnGap={8} alignItems={'baseline'}>
        <GridItem colSpan={2}>
          <H2Heading>Args</H2Heading>
        </GridItem>
        <GridItem>
          <Text fontWeight={600}>Default</Text>
        </GridItem>
        <GridItem>
          <InternalLinkComponent href="/blog">Blog</InternalLinkComponent>
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
              <Text fontWeight={700}>
                {internalLinkStyles.sizes[size].fontSize}
              </Text>
            </GridItem>
            <GridItem>
              <InternalLinkComponent href="/blog" size={size}>
                Blog
              </InternalLinkComponent>
            </GridItem>
          </>
        ))}
      </Grid>
    </Stack>
  ),
};
