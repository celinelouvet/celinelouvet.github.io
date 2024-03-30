import { Stack, StackItem } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H1Heading } from '@/components/core';
import { type SurveyPollChoiceQuestion as SurveyPollChoiceQuestionModel } from '@/models';

import { SurveyPollChoiceQuestion as SurveyPollChoiceQuestionComponent } from './SurveyPollChoiceQuestion';

const question = {
  type: 'choice',
  title: 'What is your name?',
  initialState: true,
  optional: false,
  choices: [
    { text: 'Yes', value: 'yes', next: 'next-question', color: 'red' },
    { text: 'No', value: 'no', next: 'next-question', color: 'green' },
  ],
} satisfies SurveyPollChoiceQuestionModel;

const meta = {
  title: 'Core/Survey/Poll',
  component: SurveyPollChoiceQuestionComponent,
  args: {
    question,
  },
} satisfies Meta<typeof SurveyPollChoiceQuestionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SurveyPollChoiceQuestion: Story = {
  render: (args) => (
    <Stack spacing="8">
      <StackItem>
        <H1Heading>Mandatory</H1Heading>
        <SurveyPollChoiceQuestionComponent {...args} />
      </StackItem>
      <StackItem>
        <H1Heading>Optional</H1Heading>
        <SurveyPollChoiceQuestionComponent
          {...args}
          question={{ ...question, optional: true }}
        />
      </StackItem>
    </Stack>
  ),
};
