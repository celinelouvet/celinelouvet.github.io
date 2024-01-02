import { type Meta, type StoryObj } from '@storybook/react';

import { HeaderContainer as HeaderContainerComponent } from '@/components/layout';

const meta = {
  title: 'Theme/Layout',
  component: HeaderContainerComponent,
} satisfies Meta<typeof HeaderContainerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderContainer: Story = {
  render: () => (
    <HeaderContainerComponent>HeaderContainer</HeaderContainerComponent>
  ),
};
