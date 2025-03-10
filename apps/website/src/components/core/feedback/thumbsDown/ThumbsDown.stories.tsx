import { For, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { ThumbsDown as ThumbsDownComponent } from './ThumbsDown';
import { H2Heading } from '../../typography';

const meta = {
  title: 'Core/Feedback',
  component: ThumbsDownComponent,
} satisfies Meta<typeof ThumbsDownComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants = ['subtle', 'surface', 'solid', 'outline', 'slide'] as const;
type Variant = (typeof variants)[number];

type ItemProps = {
  variant: Variant;
};

export const ThumbsDown: Story = {
  args: {
    children: 'Nope everything is bad',
  },

  render: ({ children }) => {
    const Item = ({ variant }: ItemProps) => (
      <>
        <GridItem>
          <Text fontWeight="700">{variant}</Text>
        </GridItem>

        <GridItem>
          <ThumbsDownComponent variant={variant}>
            {children}
          </ThumbsDownComponent>
        </GridItem>
        <GridItem>
          <ThumbsDownComponent title="Title" variant={variant}>
            {children}
          </ThumbsDownComponent>
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
