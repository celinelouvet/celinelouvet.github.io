import { Card, For, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { DateText } from './DateText';
import { H3Heading } from '../headings';

const meta = {
  title: 'Core/Typography',
  component: DateText,
  args: {
    when: '2023/07/31',
    dateFormat: 'MMMM D, YYYY',
  },
} satisfies Meta<typeof DateText>;

export default meta;
type Story = StoryObj<typeof meta>;

const sizes = ['xs', 'sm', 'md', 'lg'] as const;
type Size = (typeof sizes)[number];

type ItemProps = {
  title: string;
  size?: Size;
  variant?: 'slide';
};

export const DateTexts: Story = {
  render: ({ when, dateFormat }) => {
    const Item = ({ title, size, variant }: ItemProps) => (
      <>
        <GridItem>
          <Text fontWeight="700">{title}</Text>
        </GridItem>
        <GridItem>
          <DateText
            size={size}
            variant={variant}
            when={when}
            dateFormat={dateFormat}
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
              templateColumns="70px 1fr"
              columnGap="8"
              rowGap="4"
              alignItems="baseline"
            >
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
              templateColumns="70px 1fr"
              columnGap="8"
              rowGap="4"
              alignItems="baseline"
            >
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
