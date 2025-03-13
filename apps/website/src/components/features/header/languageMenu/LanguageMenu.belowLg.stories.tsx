import { Flex } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { LanguageMenuInner as LanguageMenuComponent } from './LanguageMenu';

const meta = {
  title: 'Features/Header/BelowLg/Parts',
  component: LanguageMenuComponent,
} satisfies Meta<typeof LanguageMenuComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LanguageMenu: Story = {
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
