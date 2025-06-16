import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from '@/components/core';
import resume from '@/data/data.fr';

import { Summary as SummaryComponent } from './Summary';

const meta = {
  title: 'Features/Resume/Between MD and LG',
  component: SummaryComponent,

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
} satisfies Meta<typeof SummaryComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Summary: Story = {
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
};
