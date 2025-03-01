import { HStack } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { ColorModeProvider } from '@/components/ui';

import { HeaderButton as HeaderButtonComponent } from './HeaderButton';

const meta = {
  title: 'Features/Header/AboveLg/Parts',
  component: HeaderButtonComponent,
  args: {
    section: {
      to: '/blog',
      slug: 'blog',
    },
  },
  decorators: [
    (Story) => (
      <ColorModeProvider attribute="class">
        <Story />
      </ColorModeProvider>
    ),
  ],
} satisfies Meta<typeof HeaderButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderButton: Story = {
  render: () => (
    <HStack gap="8">
      <HeaderButtonComponent section={{ to: '/', slug: 'home' }} />
      <HeaderButtonComponent section={{ to: '/blog', slug: 'blog' }} />
    </HStack>
  ),
};
