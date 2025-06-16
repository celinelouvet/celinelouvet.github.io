import { Card, For, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H3Heading } from '../headings';
import { DateFormatter } from './DateFormatter';

const meta = {
  title: 'Core/Typography',
  component: DateFormatter,
  args: {
    when: '2023/07/31',
    dateFormat: 'MMM yyyy',
  },
} satisfies Meta<typeof DateFormatter>;

export default meta;
type Story = StoryObj<typeof meta>;

const sizes = ['xs', 'sm', 'md', 'lg'] as const;
type Size = (typeof sizes)[number];

type ItemProps = {
  title: string;
  size?: Size;
  variant?: 'slide';
};

const date = {
  when: '2023-07-31',
  dateFormat: 'MMM yyyy',
};

const from = '2021-01-01';
const to = '2022-04-25';

export const DateFormatters: Story = {
  args: {
    type: 'date',
    when: '2023/07/31',
    dateFormat: 'MMM yyyy',
  },

  render: () => {
    const Item = ({ title, size, variant }: ItemProps) => (
      <>
        <GridItem>
          <Text fontWeight="700">{title}</Text>
        </GridItem>
        <GridItem>
          <DateFormatter size={size} variant={variant} type="date" {...date} />
        </GridItem>
        <GridItem>
          <DateFormatter
            size={size}
            variant={variant}
            type="period"
            period={{ from }}
          />
        </GridItem>
        <GridItem>
          <DateFormatter
            size={size}
            variant={variant}
            type="period"
            period={{ from, to }}
          />
        </GridItem>
        <GridItem>
          <DateFormatter
            size={size}
            variant={variant}
            type="duration"
            period={{ from }}
          />
        </GridItem>
        <GridItem>
          <DateFormatter
            size={size}
            variant={variant}
            type="duration"
            period={{ from, to }}
          />
        </GridItem>
      </>
    );

    return (
      <Stack gap="8">
        <Card.Root variant="outline">
          <Card.Header>
            <H3Heading>Sizes</H3Heading>
          </Card.Header>
          <Card.Body>
            <Grid
              templateColumns="70px 1fr 1fr 1fr 1fr 1fr"
              columnGap="8"
              rowGap="4"
              alignItems="baseline"
            >
              <GridItem></GridItem>
              <GridItem>Date</GridItem>
              <GridItem>Period (today)</GridItem>
              <GridItem>Period</GridItem>
              <GridItem>Duration (today)</GridItem>
              <GridItem>Duration</GridItem>
              <For each={sizes}>
                {(size) => <Item title={size} size={size} />}
              </For>
            </Grid>
          </Card.Body>
        </Card.Root>

        <Card.Root variant="outline">
          <Card.Header>
            <H3Heading>Variants</H3Heading>
          </Card.Header>
          <Card.Body>
            <Grid
              templateColumns="70px 1fr 1fr 1fr 1fr 1fr"
              columnGap="8"
              rowGap="4"
              alignItems="baseline"
            >
              <GridItem></GridItem>
              <GridItem>Date</GridItem>
              <GridItem>Period (today)</GridItem>
              <GridItem>Period</GridItem>
              <GridItem>Duration (today)</GridItem>
              <GridItem>Duration</GridItem>
              <For each={[undefined, 'slide']}>
                {(variant) => (
                  <Item title={variant ? variant : 'none'} variant={variant} />
                )}
              </For>
            </Grid>
          </Card.Body>
        </Card.Root>
      </Stack>
    );
  },
};
