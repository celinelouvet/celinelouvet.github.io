import { type Meta, type StoryObj } from '@storybook/react';

import { Summary as SummaryComponent } from './Summary';

const meta = {
  title: 'Features/Home/Parts',
  component: SummaryComponent,
} satisfies Meta<typeof SummaryComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Summary: Story = {
  args: {
    resume: {
      firstname: 'John',
      lastname: 'Doe',
      title: 'Software Engineer',
    },
  },
};
