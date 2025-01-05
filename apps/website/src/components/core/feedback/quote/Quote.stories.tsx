import { For, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Quote as QuoteComponent } from './Quote';
import { H2Heading } from '../../typography';

const meta = {
  title: 'Core/Feedback',
  component: QuoteComponent,
  args: {
    children: 'This is a quote.',
  },
} satisfies Meta<typeof QuoteComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants = ['subtle', 'surface', 'solid', 'outline', 'slide'] as const;
type Variant = (typeof variants)[number];

type ItemProps = {
  variant: Variant;
};

export const Quote: Story = {
  render: ({ children }) => {
    const Item = ({ variant }: ItemProps) => (
      <>
        <GridItem>
          <Text fontWeight="700">{variant}</Text>
        </GridItem>

        <GridItem>
          <QuoteComponent variant={variant}>{children}</QuoteComponent>
        </GridItem>
        <GridItem>
          <QuoteComponent title="Title" variant={variant}>
            {children}
          </QuoteComponent>
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
