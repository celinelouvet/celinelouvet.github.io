import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from 'src/components/core';
import resume from 'src/data/data.fr';

import { Content as ContentComponent } from './Content';

const meta = {
  title: 'Features/Resume/Below MD',
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

export const ContentBelowMd: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },
};

export const ContentBelowSm: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
