import { Grid, GridItem, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { DurationText } from './DurationText';

const from = '2021-01-01';
const to = '2022-04-25';

const meta = {
  title: 'Theme/Typography',
  component: DurationText,
  args: {
    period: { from },
  },
} satisfies Meta<typeof DurationText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DurationTexts: Story = {
  render: ({ period }) => (
    <Grid templateColumns="250px 1fr" columnGap={8}>
      <GridItem>
        <Text fontWeight={700}>from: {from}, to today</Text>
      </GridItem>
      <GridItem>
        <DurationText period={period} />
      </GridItem>
      <GridItem>
        <Text fontWeight={700}>
          from: {from}, to: {to}
        </Text>
      </GridItem>
      <GridItem>
        <DurationText period={{ ...period, to }} />
      </GridItem>
    </Grid>
  ),
};
