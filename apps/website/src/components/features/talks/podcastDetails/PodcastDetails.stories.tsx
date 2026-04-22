import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from 'src/components/core';
import type { Podcast } from 'src/data';

import { PodcastDetails as PodcastDetailsComponent } from './PodcastDetails';

const meta = {
  title: 'Features/Talks',
  component: PodcastDetailsComponent,
} satisfies Meta<typeof PodcastDetailsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PodcastDetails: Story = {
  args: {
    podcast: {
      name: 'Podcast name',
      title: 'Podcast title',
      author: 'Podcast author',
      language: 'FR',
      when: '2021-01-01',
      episode: 'S01 E01',
      description:
        'Technical leader with a mid-management role and a strategic involvement, while being glue for the team, and developing backend features.',
      links: {
        audio: 'https://example.com/audio.mp3',
        video: 'https://example.com',
      },
      pictureId: 'podcast_avocadogrowth2024',
    } satisfies Podcast,
  },

  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
};
