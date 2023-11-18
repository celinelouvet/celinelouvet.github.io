import { HStack, Stack, Text } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

import { SocialLink } from '@/components/navigation';

const meta = {
  title: 'Theme/Navigation/SocialLink',
  component: SocialLink,
  args: {
    social: {
      name: 'twitter',
      handle: 'username',
      link: 'https://twitter.com/username',
    },
  },
} satisfies Meta<typeof SocialLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: () => (
    <Stack spacing={10}>
      <HStack spacing={6}>
        <Text minW="70px">Twitter:</Text>
        <SocialLink
          social={{
            name: 'twitter',
            handle: 'username',
            link: 'https://twitter.com/username',
          }}
        />
      </HStack>
      <HStack spacing={6}>
        <Text minW="70px">Linkedin:</Text>
        <SocialLink
          social={{
            name: 'linkedin',
            handle: 'username',
            link: 'https://www.linkedin.com/in/username',
          }}
        />
      </HStack>
      <HStack spacing={6}>
        <Text minW="70px">Mastodon:</Text>
        <SocialLink
          social={{
            name: 'mastodon',
            handle: 'username@mastodon.org',
            link: 'https://mastodon.org/@username',
          }}
        />
      </HStack>
      <HStack spacing={6}>
        <Text minW="70px">Bluesky:</Text>
        <SocialLink
          social={{
            name: 'bluesky',
            handle: 'username.bsky.social',
            link: 'https://bsky.app/profile/username.bsky.social',
          }}
        />
      </HStack>
      <HStack spacing={6}>
        <Text minW="70px">Other:</Text>
        <SocialLink
          social={{
            name: 'whatever',
            handle: 'username',
            link: 'https://whatever.app/username',
          }}
        />
      </HStack>
    </Stack>
  ),
};

export const Playground: Story = {};
