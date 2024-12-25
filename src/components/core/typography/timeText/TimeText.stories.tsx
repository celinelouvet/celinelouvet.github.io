import { Grid, GridItem, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { TimeText as TimeTextComponent } from './TimeText';
import { H2Heading } from '../headings';

const meta = {
  title: 'Core/Typography',
  component: TimeTextComponent,
  args: {
    hours: 1,
    minutes: 26,
  },
} satisfies Meta<typeof TimeTextComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TimeTexts: Story = {
  render: (args) => (
    <Grid templateColumns="275px 1fr" columnGap="8" alignItems="baseline">
      <GridItem colSpan={2}>
        <H2Heading>Args</H2Heading>
      </GridItem>
      <GridItem>
        <Text fontWeight="600">Without seconds</Text>
      </GridItem>
      <GridItem>
        <TimeTextComponent {...args} />
      </GridItem>
      <GridItem>
        <Text fontWeight="600">With seconds</Text>
      </GridItem>
      <GridItem>
        <TimeTextComponent {...args} seconds={37} />
      </GridItem>
      <GridItem>
        <Text fontWeight="600">With 0</Text>
      </GridItem>
      <GridItem>
        <TimeTextComponent hours={0} minutes={0} seconds={0} />
      </GridItem>
      <GridItem>
        <Text fontWeight="600">None</Text>
      </GridItem>
      <GridItem>
        <TimeTextComponent />
      </GridItem>
    </Grid>
  ),
};
