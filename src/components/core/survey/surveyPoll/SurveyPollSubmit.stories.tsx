import { type Meta, type StoryObj } from '@storybook/react';

import { SurveyPollSubmit as SurveyPollSubmitComponent } from './SurveyPollSubmit';

const meta = {
  title: 'Core/Survey/Poll',
  component: SurveyPollSubmitComponent,
  args: {},
} satisfies Meta<typeof SurveyPollSubmitComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SurveyPollSubmit: Story = {};
