import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SurveyPollSubmit as SurveyPollSubmitComponent } from './SurveyPollSubmit';

const meta = {
  title: 'Core/Survey/Poll',
  component: SurveyPollSubmitComponent,
} satisfies Meta<typeof SurveyPollSubmitComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Submit: Story = {
  args: {
    onSubmit: fn(),
  },
};
