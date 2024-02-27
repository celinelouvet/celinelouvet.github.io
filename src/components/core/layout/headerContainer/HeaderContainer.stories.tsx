import { type Meta, type StoryObj } from '@storybook/react';

import { HeaderContainer as HeaderContainerComponent } from '@/components/core';

const meta = {
  title: 'Core/Layout',
  component: HeaderContainerComponent,
} satisfies Meta<typeof HeaderContainerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderContainer: Story = {
  render: () => (
    <HeaderContainerComponent bgColor={'brand.700'} color={'brand.200'}>
      HeaderContainer
    </HeaderContainerComponent>
  ),
};
