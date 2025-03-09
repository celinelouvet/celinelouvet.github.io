import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from '@/components/core';
import { ColorModeProvider } from '@/components/ui';
import resume from '@/data/data.fr';

import { Talks as TalksComponent } from './Talks';

const meta = {
  title: 'Features/Talks',
  component: TalksComponent,
  decorators: [
    (Story) => (
      <ColorModeProvider attribute="class">
        <PageContainer>
          <Story />
        </PageContainer>
      </ColorModeProvider>
    ),
  ],
  args: {
    resume,
  },
} satisfies Meta<typeof TalksComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageContent: Story = {};
