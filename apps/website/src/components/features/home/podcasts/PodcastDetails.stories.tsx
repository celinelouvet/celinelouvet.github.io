import { Box, Stack } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { ColorModeProvider } from '@/components/ui';

import { basicPodcast, fullPodcast } from './fixtures';
import { PodcastDetails as PodcastDetailsComponent } from './PodcastDetails';

const meta = {
  title: 'Features/Home/Parts',
  component: PodcastDetailsComponent,
  decorators: [
    (Story) => (
      <ColorModeProvider attribute="class">
        <Box padding="4">
          <Story />
        </Box>
      </ColorModeProvider>
    ),
  ],
  args: {
    podcast: basicPodcast,
  },
} satisfies Meta<typeof PodcastDetailsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PodcastDetails: Story = {
  render: ({ podcast }) => {
    return (
      <Stack gap="10">
        <PodcastDetailsComponent podcast={podcast} />
        <PodcastDetailsComponent podcast={fullPodcast} />
      </Stack>
    );
  },
};
