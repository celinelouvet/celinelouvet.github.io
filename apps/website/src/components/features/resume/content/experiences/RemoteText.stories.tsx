import { Box, Card, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H3Heading } from '@/components/core';

import { RemoteText as RemoteTextComponent } from './parts/RemoteText';

const meta = {
  title: 'Features/Resume/Content',
  component: RemoteTextComponent,
  args: {
    remote: 'NONE',
  },
} satisfies Meta<typeof RemoteTextComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RemoteText: Story = {
  render: () => (
    <Stack gap="4">
      <Card.Root variant="outline" size="sm">
        <Card.Header>
          <H3Heading>Remote types</H3Heading>
        </Card.Header>
        <Card.Body>
          <Grid templateColumns="150px 1fr" columnGap="8">
            <Box>
              <Text fontWeight="700">NONE</Text>
            </Box>
            <Box>
              <RemoteTextComponent remote="NONE" />
            </Box>
            <Box>
              <Text fontWeight="700">HYBRID</Text>
            </Box>
            <Box>
              <RemoteTextComponent remote="HYBRID" />
            </Box>
            <Box>
              <Text fontWeight="700">FULLTIME</Text>
            </Box>
            <Box>
              <RemoteTextComponent remote="FULLTIME" />
            </Box>
          </Grid>
        </Card.Body>
      </Card.Root>

      <Card.Root variant="outline" size="sm">
        <Card.Header>
          <H3Heading>Sizes</H3Heading>
        </Card.Header>
        <Card.Body>
          <Grid templateColumns="70px 1fr" columnGap="8">
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
        </Card.Body>
      </Card.Root>
    </Stack>
  ),
};
