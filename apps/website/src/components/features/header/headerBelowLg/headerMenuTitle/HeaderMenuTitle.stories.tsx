import { Flex } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { HeaderMenuTitle as HeaderMenuTitleComponent } from './HeaderMenuTitle';

const meta = {
  title: 'Features/Header/BelowLg/Parts',
  component: HeaderMenuTitleComponent,
  args: {
    slug: 'blog',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },
} satisfies Meta<typeof HeaderMenuTitleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuTitle: Story = {
  render: ({ slug }) => (
    <Flex
      backgroundGradient="brand"
      marginBottom="3"
      paddingBottom="1.5"
      paddingLeft="4"
    >
      <HeaderMenuTitleComponent slug={slug} />
    </Flex>
  ),
};
