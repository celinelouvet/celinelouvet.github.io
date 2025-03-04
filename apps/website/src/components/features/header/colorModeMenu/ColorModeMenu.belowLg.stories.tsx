import { Flex } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ColorModeProvider } from '@/components/ui';

import { ColorModeMenuInner as ColorModeMenuComponent } from './ColorModeMenu';

const meta = {
  title: 'Features/Header/BelowLg/Parts',
  component: ColorModeMenuComponent,
  args: {
    log: fn(),
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
} satisfies Meta<typeof ColorModeMenuComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorModeMenu: Story = {
  render: (args) => (
    <Flex
      alignItems="stretch"
      justifyContent="center"
      direction="column"
      padding="6"
    >
      <ColorModeMenuComponent {...args} />
    </Flex>
  ),
};
