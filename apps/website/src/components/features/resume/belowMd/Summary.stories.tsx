import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from 'src/components/core';
import resume from 'src/data/data.fr';

import { Summary as SummaryComponent } from './Summary';

const meta = {
  title: 'Features/Resume/Below MD',
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

export const SummaryBelowMd: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },
};

export const SummaryBelowSm: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
