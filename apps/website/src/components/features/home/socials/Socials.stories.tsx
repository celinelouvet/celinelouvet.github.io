import { type Meta, type StoryObj } from '@storybook/react';

import { Socials as SocialsComponent } from './Socials';

const meta = {
  title: 'Features/Home/Parts',
  component: SocialsComponent,
} satisfies Meta<typeof SocialsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Socials: Story = {
  args: {
    socials: [
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
        name: 'other',
        handle: 'site',
        link: 'https://handle.com',
      },
    ],
  },
};
