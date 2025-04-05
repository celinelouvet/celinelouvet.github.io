import { For, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Failure as FailureComponent } from './Failure';
import { H2Heading } from '../../typography';

const meta = {
  title: 'Core/Feedback',
  component: FailureComponent,
} satisfies Meta<typeof FailureComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants = [
  'subtle',
  'surface',
  'solid',
  'outline',
  'slide',
  'rightSlide',
] as const;
type Variant = (typeof variants)[number];

type ItemProps = {
  variant: Variant;
};

export const Failure: Story = {
  args: {
    children: 'Nope everything is very bad',
  },

  render: ({ children }) => {
    const Item = ({ variant }: ItemProps) => (
      <>
        <GridItem>
          <Text fontWeight="700">{variant}</Text>
        </GridItem>

        <GridItem>
          <FailureComponent variant={variant}>{children}</FailureComponent>
        </GridItem>
        <GridItem>
          <FailureComponent title="Title" variant={variant}>
            {children}
          </FailureComponent>
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
