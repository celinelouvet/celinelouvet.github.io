import { Divider, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { PeriodText, periodTextStyles } from './PeriodText';
import { H2Heading } from '../headings';

const from = '2021-01-01';
const to = '2022-04-25';

const meta = {
  title: 'Theme/Typography',
  component: PeriodText,
  args: {
    period: { from },
  },
} satisfies Meta<typeof PeriodText>;

const sizes = ['sm', 'xs'] as const;

export default meta;
type Story = StoryObj<typeof meta>;

export const PeriodTexts: Story = {
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
          <PeriodText period={period} />
        </GridItem>
        <GridItem>
          <Text fontWeight={600}>
            from: {from}, to: {to}
          </Text>
        </GridItem>
        <GridItem>
          <PeriodText period={{ ...period, to }} />
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
                {periodTextStyles.sizes[size].fontSize}
              </Text>
            </GridItem>
            <GridItem>
              <PeriodText period={period} size={size} />
            </GridItem>
          </>
        ))}
      </Grid>
    </Stack>
  ),
};
