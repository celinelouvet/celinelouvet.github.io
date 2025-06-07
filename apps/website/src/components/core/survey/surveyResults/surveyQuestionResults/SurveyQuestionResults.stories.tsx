import { Box, Stack } from '@chakra-ui/react';
import {
  type SurveyPollChoice,
  type SurveyPollChoiceQuestion,
} from '@repo/models';
import { type Meta, type StoryObj } from '@storybook/react';

import { ColorModeButton } from '@/components/ui';

import { SurveyQuestionResults as SurveyQuestionResultsComponent } from './SurveyQuestionResults';

const baseQuestion = {
  type: 'choice',
  sankey: 'Sankey title',
  choices: [
    { text: 'Oui', value: 'yes', next: '' },
    { text: 'Non', value: 'no', next: '' },
  ] satisfies SurveyPollChoice[],
  initialState: true,
  optional: false,
} satisfies Omit<SurveyPollChoiceQuestion, 'title'>;

const questionWithoutResults = {
  ...baseQuestion,
  title: 'Question without results',
};

const questionWithResults = {
  ...baseQuestion,
  title: 'Question with results',
};

const results = { yes: 10, no: 20 } as Record<string, number>;

const meta = {
  title: 'Core/Survey/Results',
  component: SurveyQuestionResultsComponent,
} satisfies Meta<typeof SurveyQuestionResultsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SurveyQuestionResults: Story = {
  render: () => {
    return (
      <Stack gap="4">
        <Box alignItems="flex-end">
          <ColorModeButton />
        </Box>

        <SurveyQuestionResultsComponent
          question={questionWithoutResults}
          results={{}}
        />

        <SurveyQuestionResultsComponent
          question={questionWithResults}
          results={results}
        />
      </Stack>
    );
  },
};
