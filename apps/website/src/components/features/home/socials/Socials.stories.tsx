import { Box } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { ColorModeProvider } from '@/components/ui';

import { Socials as SocialsComponent } from './Socials';

const meta = {
  title: 'Features/Home/Parts',
  component: SocialsComponent,
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
    socials: [
      {
        name: 'twitter',
        handle: 'twitter_handle',
        link: 'https://twitter.com/handle',
      },
      {
        name: 'linkedin',
        handle: 'likedin_handle',
        link: 'https://www.linkedin.com/in/handle',
      },
      {
        name: 'bluesky',
        handle: 'handle.bsky.social',
        link: 'https://bsky.app/profile/handle.bsky.social',
      },
      {
        name: 'mastodon',
        handle: 'handle@pouet.chapril.org',
        link: 'https://pouet.chapril.org/@handle',
      },
      {
        name: 'other',
        handle: 'site',
        link: 'https://handle.com',
      },
    ],
  },
} satisfies Meta<typeof SocialsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Socials: Story = {};
