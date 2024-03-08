import { Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Question as QuestionComponent } from './Question';

const meta = {
  title: 'Core/Feeback',
  component: QuestionComponent,
  args: {
    children: 'This is a question.',
  },
} satisfies Meta<typeof QuestionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Question: Story = {
  render: (args) => (
    <>
      <Text>Question</Text>
      <QuestionComponent {...args} />
    </>
  ),
};
