import { type Meta, type StoryObj } from '@storybook/react';


import { PageContainer } from '@/components/core';
import resume from '@/data/data.fr';

import { Content as ContentComponent } from './Content';

const meta = {
  title: 'Features/Resume/Above LG',
  component: ContentComponent,

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
} satisfies Meta<typeof ContentComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};
