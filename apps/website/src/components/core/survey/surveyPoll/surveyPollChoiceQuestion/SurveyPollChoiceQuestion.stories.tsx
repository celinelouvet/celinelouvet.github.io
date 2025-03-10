import { Box, Stack } from '@chakra-ui/react';
import { type SurveyPollChoiceQuestion as SurveyPollChoiceQuestionModel } from '@repo/models';
import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { H1Heading } from '@/components/core';

import { SurveyPollChoiceQuestion as SurveyPollChoiceQuestionComponent } from './SurveyPollChoiceQuestion';

const meta = {
  title: 'Core/Survey/Poll',
  component: SurveyPollChoiceQuestionComponent,
} satisfies Meta<typeof SurveyPollChoiceQuestionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChoiceQuestion: Story = {
  args: {
    question: {
      type: 'choice',
      title: 'Did you accept?',
      initialState: true,
      optional: false,
      choices: [
        { text: 'Yes', value: 'yes', next: 'next-question' },
        { text: 'No', value: 'no', next: 'next-question' },
      ],
    } satisfies SurveyPollChoiceQuestionModel,
    onAnswer: fn(),
  },

  render: (args) => {
    const question = args.question;
    return (
      <Stack gap="8">
        <Box>
          <H1Heading>Mandatory</H1Heading>
          <SurveyPollChoiceQuestionComponent {...args} />
        </Box>
        <Box>
          <H1Heading>Optional</H1Heading>
          <SurveyPollChoiceQuestionComponent
            {...args}
            question={{ ...question, optional: true }}
          />
        </Box>
      </Stack>
    );
  },
};
