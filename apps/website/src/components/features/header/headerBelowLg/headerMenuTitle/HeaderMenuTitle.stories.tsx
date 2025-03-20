import { Flex } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { HeaderMenuTitle as HeaderMenuTitleComponent } from './HeaderMenuTitle';

const meta = {
  title: 'Features/Header/BelowLg/Parts',
  component: HeaderMenuTitleComponent,
} satisfies Meta<typeof HeaderMenuTitleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuTitle: Story = {
  args: {
    slug: 'resume',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },

  decorators: [
    (Story) => (
      <Flex
        backgroundGradient="brand"
        marginBottom="3"
        paddingBottom="1.5"
        paddingLeft="4"
      >
        <Story />
      </Flex>
    ),
  ],
};
