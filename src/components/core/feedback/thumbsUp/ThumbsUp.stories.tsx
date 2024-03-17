import { Grid, GridItem, Stack, Text } from '@chakra-ui/react';
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

const variants = ['subtle', 'left-accent', 'top-accent', 'solid'] as const;

export const ThumbsUp: Story = {
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
              <ThumbsUpComponent {...args} variant={variant} />
            </GridItem>
          </>
        ))}
      </Grid>
    </Stack>
  ),
};
