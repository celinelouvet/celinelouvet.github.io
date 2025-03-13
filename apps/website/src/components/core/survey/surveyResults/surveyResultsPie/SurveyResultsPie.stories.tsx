import { Box, Card, Center, Stack } from '@chakra-ui/react';
import { type SurveyPollChoice } from '@repo/models';
import { type Meta, type StoryObj } from '@storybook/react';

import { H3Heading } from '@/components/core';
import { ColorModeButton } from '@/components/ui';

import { SurveyResultsPie as SurveyResultsPieComponent } from './SurveyResultsPie';

const meta = {
  title: 'Core/Survey/Results',
  component: SurveyResultsPieComponent,
} satisfies Meta<typeof SurveyResultsPieComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SurveyResultsPie: Story = {
  args: {
    question: {
      type: 'choice',
      title: 'Question title',
      choices: [
        { text: 'Oui', value: 'yes', next: '' },
        { text: 'Non', value: 'no', next: '' },
      ] satisfies SurveyPollChoice[],
      initialState: true,
      optional: false,
    },
    results: { yes: 10, no: 20 } as Record<string, number>,
  },

  render: ({ question, results }) => (
    <Stack gap="4">
      <Box alignItems="flex-end">
        <ColorModeButton />
      </Box>
      <Card.Root>
        <Card.Header>
          <H3Heading>Without results</H3Heading>
        </Card.Header>
        <Card.Body>
          <Center>
            <SurveyResultsPieComponent question={question} results={{}} />
          </Center>
        </Card.Body>
      </Card.Root>

      <Card.Root>
        <Card.Header>
          <H3Heading>With results</H3Heading>
        </Card.Header>
        <Card.Body>
          <Center>
            <SurveyResultsPieComponent question={question} results={results} />
          </Center>
        </Card.Body>
      </Card.Root>
    </Stack>
  ),
};
