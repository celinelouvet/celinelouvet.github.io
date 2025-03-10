import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from '@/components/core';
import resume from '@/data/data.fr';

import { Talks as TalksComponent } from './Talks';

const meta = {
  title: 'Features/Talks',
  component: TalksComponent,
} satisfies Meta<typeof TalksComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageContent: Story = {
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
};
