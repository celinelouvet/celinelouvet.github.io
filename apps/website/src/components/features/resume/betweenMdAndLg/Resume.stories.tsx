import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from 'src/components/core';
import resume from 'src/data/data.fr';

import { ResumeContent as ResumeComponent } from './Resume';

const meta = {
  title: 'Features/Resume/Between MD and LG',
  component: ResumeComponent,

  args: {
    resume,
  },

  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
} satisfies Meta<typeof ResumeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Resume: Story = {
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
};
