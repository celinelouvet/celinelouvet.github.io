import { For, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { ThumbsUp as ThumbsUpComponent } from './ThumbsUp';
import { H2Heading } from '../../typography';

const meta = {
  title: 'Core/Feedback',
  component: ThumbsUpComponent,
  args: {
    children: 'Yeah everything is good',
  },
} satisfies Meta<typeof ThumbsUpComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants = ['subtle', 'surface', 'solid', 'outline', 'slide'] as const;
type Variant = (typeof variants)[number];

type ItemProps = {
  variant: Variant;
};

export const ThumbsUp: Story = {
  render: ({ children }) => {
    const Item = ({ variant }: ItemProps) => (
      <>
        <GridItem>
          <Text fontWeight="700">{variant}</Text>
        </GridItem>

        <GridItem>
          <ThumbsUpComponent variant={variant}>{children}</ThumbsUpComponent>
        </GridItem>
        <GridItem>
          <ThumbsUpComponent title="Title" variant={variant}>
            {children}
          </ThumbsUpComponent>
        </GridItem>
      </>
    );

    return (
      <Stack gap="4">
        <Grid templateColumns="100px 1fr 1fr" gap="8" alignItems="baseline">
          <GridItem colSpan={3}>
            <H2Heading>Variants</H2Heading>
          </GridItem>
          <For each={variants}>
            {(variant: Variant) => <Item key={variant} variant={variant} />}
          </For>
        </Grid>
      </Stack>
    );
  },
};
