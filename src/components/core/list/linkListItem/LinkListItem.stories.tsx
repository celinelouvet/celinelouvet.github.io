import { List } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { BsGeoAltFill } from 'react-icons/bs';

import { TextListItem as TextListItemComponent } from '@/components/core';

const meta = {
  title: 'Core/List',
  component: TextListItemComponent,
  args: {
    icon: BsGeoAltFill,
    ariaLabel: 'Location',
    text: 'Lyon',
  },
} satisfies Meta<typeof TextListItemComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextListItem: Story = {
  render: ({ icon, ariaLabel, text }) => (
    <List>
      <TextListItemComponent icon={icon} ariaLabel={ariaLabel} text={text} />
    </List>
  ),
};
