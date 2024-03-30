import { Stack, StackItem } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H1Heading } from '@/components/core';
import { type SurveyPollTextQuestion as SurveyPollTextQuestionModel } from '@/models';

import { SurveyPollTextQuestion as SurveyPollTextQuestionComponent } from './SurveyPollTextQuestion';

const question = {
  type: 'text',
  title: 'What is your name?',
  next: 'next-question',
  initialState: true,
  optional: false,
} satisfies SurveyPollTextQuestionModel;

const meta = {
  title: 'Core/Survey/Poll',
  component: SurveyPollTextQuestionComponent,
  args: {
    question,
  },
} satisfies Meta<typeof SurveyPollTextQuestionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SurveyPollTextQuestion: Story = {
  render: (args) => (
    <Stack>
      <StackItem>
        <H1Heading>Mandatory</H1Heading>
        <SurveyPollTextQuestionComponent {...args} />
      </StackItem>
      <StackItem>
        <H1Heading>Optional</H1Heading>
        <SurveyPollTextQuestionComponent
          {...args}
          question={{ ...question, optional: true }}
        />
      </StackItem>
    </Stack>
  ),
};
