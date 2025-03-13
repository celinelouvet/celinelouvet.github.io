import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from '@/components/core';
import resume from '@/data/data.fr';

import { Home as HomeComponent } from './Home';

const meta = {
  title: 'Features/Home',
  component: HomeComponent,
} satisfies Meta<typeof HomeComponent>;

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
