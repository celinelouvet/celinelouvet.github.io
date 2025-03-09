import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from '@/components/core';
import { ColorModeProvider } from '@/components/ui';
import resume from '@/data/data.fr';

import { Talk as TalkComponent } from './Talk';

const meta = {
  title: 'Features/Talk',
  component: TalkComponent,
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
    talkSubjectId: 'highway_to_fail',
  },
} satisfies Meta<typeof TalkComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageContent: Story = {};
