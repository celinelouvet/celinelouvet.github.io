import { Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Failure as FailureComponent } from './Failure';
import { H2Heading } from '../../typography';

const meta = {
  title: 'Core/Feedback',
  component: FailureComponent,
  args: {
    children: 'Nope everything is very bad',
  },
} satisfies Meta<typeof FailureComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants = [
  'subtle',
  'left-accent',
  'top-accent',
  'solid',
  'slide',
] as const;

export const Failure: Story = {
  render: (args) => {
    const Item = ({ variant }: { variant: string }) => (
      <>
        <GridItem key={`text-${variant}`}>
          <Text fontWeight="700">{variant}</Text>
        </GridItem>
        <GridItem key={`notitle-${variant}`}>
          <FailureComponent {...args} variant={variant} />
        </GridItem>
        <GridItem key={`title-${variant}`}>
          <FailureComponent {...args} title="Title" variant={variant} />
        </GridItem>
      </>
    );

    return (
      <Stack spacing="4">
        <Grid templateColumns="100px 1fr 1fr" gap="8" alignItems="baseline">
          <GridItem colSpan={3}>
            <H2Heading>Variants</H2Heading>
          </GridItem>
          {variants.map((variant) => (
            <Item key={variant} variant={variant} />
          ))}
        </Grid>
      </Stack>
    );
  },
};
