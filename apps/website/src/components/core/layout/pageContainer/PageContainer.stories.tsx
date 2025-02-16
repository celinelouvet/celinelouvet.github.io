import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer as PageContainerComponent } from '@/components/core';

const meta = {
  title: 'Core/Layout',
  component: PageContainerComponent,
} satisfies Meta<typeof PageContainerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageContainer: Story = {
  render: () => (
    <PageContainerComponent bgColor="brand.700" color="brand.200">
      PageContainer
    </PageContainerComponent>
  ),
};
