import { List } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { BsTwitter } from 'react-icons/bs';

import { LinkListItem as LinkListItemComponent } from '@/components/core';

const meta = {
  title: 'Core/List',
  component: LinkListItemComponent,
  args: {
    icon: BsTwitter,
    ariaLabel: 'twitter',
    text: '@username',
    href: 'https://twitter.com/username',
  },
} satisfies Meta<typeof LinkListItemComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkListItem: Story = {
  render: ({ icon, ariaLabel, text, href }) => (
    <List>
      <LinkListItemComponent
        icon={icon}
        ariaLabel={ariaLabel}
        text={text}
        href={href}
      />
    </List>
  ),
};
