import { Flex } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ColorModeMenuInner as ColorModeMenuComponent } from './ColorModeMenu';

const meta = {
  title: 'Features/Header/BelowLg/Parts',
  component: ColorModeMenuComponent,
} satisfies Meta<typeof ColorModeMenuComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorModeMenu: Story = {
  args: {
    log: fn(),
  },

  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },

  decorators: [
    (Story) => (
      <Flex
        alignItems="stretch"
        justifyContent="center"
        direction="column"
        padding="6"
      >
        <Story />
      </Flex>
    ),
  ],
};
