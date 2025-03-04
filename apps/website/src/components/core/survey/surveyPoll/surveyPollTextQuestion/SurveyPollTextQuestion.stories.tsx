import { Box, Stack } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

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
    onAnswer: fn(),
  },
} satisfies Meta<typeof SurveyPollTextQuestionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextQuestion: Story = {
  render: (args) => (
    <Stack>
      <Box>
        <H1Heading>Mandatory</H1Heading>
        <SurveyPollTextQuestionComponent {...args} />
      </Box>
      <Box>
        <H1Heading>Optional</H1Heading>
        <SurveyPollTextQuestionComponent
          {...args}
          question={{ ...question, optional: true }}
        />
      </Box>
    </Stack>
  ),
};
