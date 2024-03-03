import { Grid, GridItem, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { DateText, H2Heading } from '@/components/core';

import { dateTextStyles } from './DateText';

const meta = {
  title: 'Core/Typography',
  component: DateText,
  args: {
    when: '2023/07/31',
    dateFormat: 'MMMM D, YYYY',
  },
} satisfies Meta<typeof DateText>;

const sizes = ['sm', 'xs'] as const;

export default meta;
type Story = StoryObj<typeof meta>;

export const DateTexts: Story = {
  render: (args) => (
    <Grid templateColumns="70px 1fr" columnGap="8" alignItems="baseline">
      <GridItem colSpan={2}>
        <H2Heading>Sizes</H2Heading>
      </GridItem>
      {sizes.map((size) => (
        <>
          <GridItem>
            <Text fontWeight="700">{dateTextStyles.sizes[size].fontSize}</Text>
          </GridItem>
          <GridItem>
            <DateText {...args} size={size} />
          </GridItem>
        </>
      ))}
    </Grid>
  ),
};
