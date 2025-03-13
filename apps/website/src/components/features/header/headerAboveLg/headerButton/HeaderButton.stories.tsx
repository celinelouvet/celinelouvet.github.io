import { HStack } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { HeaderButton as HeaderButtonComponent } from './HeaderButton';

const meta = {
  title: 'Features/Header/AboveLg/Parts',
  component: HeaderButtonComponent,
} satisfies Meta<typeof HeaderButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderButton: Story = {
  args: {
    section: {
      to: '/resume',
      slug: 'resume',
    },
  },

  render: () => (
    <HStack gap="8">
      <HeaderButtonComponent section={{ to: '/', slug: 'home' }} />
      <HeaderButtonComponent section={{ to: '/resume', slug: 'resume' }} />
    </HStack>
  ),
};
