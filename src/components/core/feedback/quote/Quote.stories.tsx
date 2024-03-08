import { Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Quote as QuoteComponent } from './Quote';

const meta = {
  title: 'Core/Feeback',
  component: QuoteComponent,
  args: {
    children: 'This is a quote.',
  },
} satisfies Meta<typeof QuoteComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Quote: Story = {
  render: (args) => (
    <>
      <Text>Quote</Text>
      <QuoteComponent {...args} />
    </>
  ),
};
