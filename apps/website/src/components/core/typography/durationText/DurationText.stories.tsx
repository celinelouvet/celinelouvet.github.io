import { Card, For, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { DurationText } from './DurationText';
import { H3Heading } from '../headings';

const from = '2021-01-01';
const to = '2022-04-25';

const meta = {
  title: 'Core/Typography',
  component: DurationText,
  args: {
    period: { from },
  },
} satisfies Meta<typeof DurationText>;

const sizes = ['xs', 'sm'] as const;

export default meta;
type Story = StoryObj<typeof meta>;

export const DurationTexts: Story = {
  render: ({ period }) => (
    <Stack gap="4">
      <Card.Root variant="outline">
        <Card.Header>
          <H3Heading>Args</H3Heading>
        </Card.Header>
        <Card.Body>
          <Grid templateColumns="275px 1fr" columnGap="8" alignItems="baseline">
            <GridItem>
              <Text fontWeight="600">from: {from}, to today</Text>
            </GridItem>
            <GridItem>
              <DurationText period={period} />
            </GridItem>
            <GridItem>
              <Text fontWeight="600">
                from: {from}, to: {to}
              </Text>
            </GridItem>
            <GridItem>
              <DurationText period={{ ...period, to }} />
            </GridItem>
          </Grid>
        </Card.Body>
      </Card.Root>

      <Card.Root variant="outline">
        <Card.Header>
          <H3Heading>Sizes</H3Heading>
        </Card.Header>
        <Card.Body>
          <Grid templateColumns="70px 1fr" columnGap="8" alignItems="baseline">
            <For each={sizes}>
              {(size) => (
                <>
                  <GridItem>
                    <Text fontWeight="700">{size}</Text>
                  </GridItem>
                  <GridItem>
                    <DurationText period={period} size={size} />
                  </GridItem>
                </>
              )}
            </For>
          </Grid>
        </Card.Body>
      </Card.Root>
    </Stack>
  ),
};
