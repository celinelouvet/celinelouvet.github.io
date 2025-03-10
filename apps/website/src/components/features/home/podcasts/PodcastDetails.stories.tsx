import { Stack } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { basicPodcast, fullPodcast } from './fixtures';
import { PodcastDetails as PodcastDetailsComponent } from './PodcastDetails';

const meta = {
  title: 'Features/Home/Parts',
  component: PodcastDetailsComponent,
  args: {
    podcast: basicPodcast,
  },
} satisfies Meta<typeof PodcastDetailsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PodcastDetails: Story = {
  render: ({ podcast }) => (
    <Stack gap="10">
      <PodcastDetailsComponent podcast={podcast} />
      <PodcastDetailsComponent podcast={fullPodcast} />
    </Stack>
  ),
};
