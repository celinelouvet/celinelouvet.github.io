import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from '@/components/core';
import resume from '@/data/data.fr';

import { ResumeLayout as ResumeComponent } from './Resume';

const meta = {
  title: 'Features/Resume',
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

export const ResumeBelowLg: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },
};

export const ResumeAboveLg: Story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};

export const ResumeBetweenMdAndLg: Story = {
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
};
