import { Divider, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H2Heading } from '@/components/core';

import {
  ExternalLink as ExternalLinkComponent,
  externalLinkStyles,
} from './ExternalLink';

const meta = {
  title: 'Core/Navigation',
  component: ExternalLinkComponent,
} satisfies Meta<typeof ExternalLinkComponent>;

const sizes = ['md', 'sm'] as const;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExternalLink: Story = {
  render: () => (
    <Stack spacing="8">
      <Grid templateColumns="70px 1fr" columnGap="8" alignItems="baseline">
        <GridItem colSpan={2}>
          <H2Heading>Args</H2Heading>
        </GridItem>
        <GridItem>
          <Text fontWeight="600">Default</Text>
        </GridItem>
        <GridItem>
          <ExternalLinkComponent href="http://google.com">
            Google
          </ExternalLinkComponent>
        </GridItem>
      </Grid>

      <Divider />

      <Grid templateColumns="70px 1fr" columnGap="8" alignItems="baseline">
        <GridItem colSpan={2}>
          <H2Heading>Sizes</H2Heading>
        </GridItem>
        {sizes.map((size) => (
          <>
            <GridItem>
              <Text fontWeight="700">
                {externalLinkStyles.sizes[size].fontSize}
              </Text>
            </GridItem>
            <GridItem>
              <ExternalLinkComponent href="http://google.com" size={size}>
                Google
              </ExternalLinkComponent>
            </GridItem>
          </>
        ))}
      </Grid>
    </Stack>
  ),
};
