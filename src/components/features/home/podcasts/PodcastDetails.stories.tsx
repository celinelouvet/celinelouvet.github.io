import { Box, Stack } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from '@/components/core';

import { basicPodcast, fullPodcast } from './fixtures';
import { PodcastDetails as PodcastDetailsComponent } from './PodcastDetails';

const meta = {
  title: 'Features/Home',
  component: PodcastDetailsComponent,
  decorators: [
    (Story) => (
      <PageContainer>
        <Box paddingLeft="120px">{Story()}</Box>
      </PageContainer>
    ),
  ],
  args: {
    podcast: basicPodcast,
  },
} satisfies Meta<typeof PodcastDetailsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllPodcastVersions: Story = {
  render: ({ podcast }) => {
    return (
      <Stack spacing="10">
        <PodcastDetailsComponent podcast={podcast} />
        <PodcastDetailsComponent podcast={fullPodcast} />
      </Stack>
    );
  },
};
