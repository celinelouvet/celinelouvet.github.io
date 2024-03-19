import { Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Question as QuestionComponent } from './Question';
import { H2Heading } from '../../typography';

const meta = {
  title: 'Core/Feedback',
  component: QuestionComponent,
  args: {
    children: 'This is a question.',
  },
} satisfies Meta<typeof QuestionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants = [
  'subtle',
  'left-accent',
  'top-accent',
  'solid',
  'slide',
] as const;

export const Question: Story = {
  render: (args) => {
    return (
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
                <QuestionComponent {...args} variant={variant} />
              </GridItem>
            </>
          ))}
        </Grid>
      </Stack>
    );
  },
};
