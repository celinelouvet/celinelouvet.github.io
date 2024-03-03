import { Divider, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H2Heading } from '@/components/core';

import { RemoteText as RemoteTextComponent } from './RemoteText';

const meta = {
  title: 'Features/Resume',
  component: RemoteTextComponent,
  args: {
    remote: 'NONE',
  },
} satisfies Meta<typeof RemoteTextComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExperienceRemoteText: Story = {
  render: () => (
    <Stack spacing="4">
      <Grid templateColumns="150px 1fr" columnGap="8">
        <GridItem colSpan={2}>
          <H2Heading>Remote types</H2Heading>
        </GridItem>
        <GridItem>
          <Text fontWeight="700">NONE</Text>
        </GridItem>
        <GridItem>
          <RemoteTextComponent remote="NONE" />
        </GridItem>
        <GridItem>
          <Text fontWeight="700">HYBRID</Text>
        </GridItem>
        <GridItem>
          <RemoteTextComponent remote="HYBRID" />
        </GridItem>
        <GridItem>
          <Text fontWeight="700">FULLTIME</Text>
        </GridItem>
        <GridItem>
          <RemoteTextComponent remote="FULLTIME" />
        </GridItem>
      </Grid>
      <Divider />
      <Grid templateColumns="70px 1fr" columnGap="8">
        <GridItem colSpan={2}>
          <H2Heading>Sizes</H2Heading>
        </GridItem>
        <GridItem>
          <Text fontWeight="700">sm</Text>
        </GridItem>
        <GridItem>
          <RemoteTextComponent remote="HYBRID" size="sm" />
        </GridItem>
        <GridItem>
          <Text fontWeight="700">xs</Text>
        </GridItem>
        <GridItem>
          <RemoteTextComponent remote="HYBRID" size="xs" />
        </GridItem>
      </Grid>
    </Stack>
  ),
};
