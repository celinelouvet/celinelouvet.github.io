import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from 'src/components/core';
import resume from 'src/data/data.fr';

import { Talk as TalkComponent } from './Talk';

const meta = {
  title: 'Features/Talk',
  component: TalkComponent,
} satisfies Meta<typeof TalkComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageContent: Story = {
  args: {
    resume,
    talkSubjectId: 'highway_to_fail',
  },

  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
};
