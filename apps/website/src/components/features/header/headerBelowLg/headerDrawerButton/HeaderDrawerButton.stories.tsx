import { Stack } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { ColorModeProvider } from '@/components/ui';

import { HeaderDrawerButton as HeaderDrawerButtonComponent } from './HeaderDrawerButton';

const meta = {
  title: 'Features/Header/BelowLg/Parts',
  component: HeaderDrawerButtonComponent,
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
  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },
} satisfies Meta<typeof HeaderDrawerButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuButton: Story = {
  render: () => (
    <Stack gap="8">
      <HeaderDrawerButtonComponent section={{ to: '/', slug: 'home' }} />
      <HeaderDrawerButtonComponent section={{ to: '/blog', slug: 'blog' }} />
    </Stack>
  ),
};
