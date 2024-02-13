import { Divider, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { DurationText, durationTextStyles } from './DurationText';
import { H2Heading } from '../headings';

const from = '2021-01-01';
const to = '2022-04-25';

const meta = {
  title: 'Theme/Typography',
  component: DurationText,
  args: {
    period: { from },
  },
} satisfies Meta<typeof DurationText>;

const sizes = ['sm', 'xs'] as const;

export default meta;
type Story = StoryObj<typeof meta>;

export const DurationTexts: Story = {
  render: ({ period }) => (
    <Stack spacing={4}>
      <Grid templateColumns="275px 1fr" columnGap={8} alignItems={'baseline'}>
        <GridItem colSpan={2}>
          <H2Heading>Args</H2Heading>
        </GridItem>
        <GridItem>
          <Text fontWeight={600}>from: {from}, to today</Text>
        </GridItem>
        <GridItem>
          <DurationText period={period} />
        </GridItem>
        <GridItem>
          <Text fontWeight={600}>
            from: {from}, to: {to}
          </Text>
        </GridItem>
        <GridItem>
          <DurationText period={{ ...period, to }} />
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
                {durationTextStyles.sizes[size].fontSize}
              </Text>
            </GridItem>
            <GridItem>
              <DurationText period={period} size={size} />
            </GridItem>
          </>
        ))}
      </Grid>
    </Stack>
  ),
};
