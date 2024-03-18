import { Grid, GridItem, Stack, Text } from '@chakra-ui/react';
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

const variants = ['subtle', 'left-accent', 'top-accent', 'solid'] as const;

export const Quote: Story = {
  render: (args) => (
    <Stack spacing="4">
      <Grid templateColumns="100px 1fr" columnGap="8" alignItems="baseline">
        <GridItem colSpan={2}>
          <H2Heading>Variants</H2Heading>
        </GridItem>
        {variants.map((variant) => (
          <>
            <GridItem>
              <Text fontWeight="700">{variant}</Text>
            </GridItem>
            <GridItem>
              <QuoteComponent {...args} variant={variant} />
            </GridItem>
          </>
        ))}
      </Grid>
    </Stack>
  ),
};
