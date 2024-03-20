import { Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { ThumbsDown as ThumbsDownComponent } from './ThumbsDown';
import { H2Heading } from '../../typography';

const meta = {
  title: 'Core/Feedback',
  component: ThumbsDownComponent,
  args: {
    children: 'Nope everything is bad',
  },
} satisfies Meta<typeof ThumbsDownComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants = [
  'subtle',
  'left-accent',
  'top-accent',
  'solid',
  'slide',
] as const;

export const ThumbsDown: Story = {
  render: (args) => {
    return (
      <Stack spacing="4">
        <Grid templateColumns="100px 1fr 1fr" gap="8" alignItems="baseline">
          <GridItem colSpan={3}>
            <H2Heading>Variants</H2Heading>
          </GridItem>
          {variants.map((variant) => (
            <>
              <GridItem>
                <Text fontWeight="700">{variant}</Text>
              </GridItem>
              <GridItem>
                <ThumbsDownComponent {...args} variant={variant} />
              </GridItem>
              <GridItem>
                <ThumbsDownComponent
                  {...args}
                  title="Title"
                  variant={variant}
                />
              </GridItem>
            </>
          ))}
        </Grid>
      </Stack>
    );
  },
};
