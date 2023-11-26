import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer as PageContainerComponent } from '@/components/layout';

const meta = {
  title: 'Theme/Layout',
  component: PageContainerComponent,
} satisfies Meta<typeof PageContainerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageContainer: Story = {
  render: () => <PageContainerComponent>PageContainer</PageContainerComponent>,
};
