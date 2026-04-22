import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from 'src/components/core';

import { Loading as LoadingComponent } from './Loading';

const meta = {
  title: 'Features/Loading',
  component: LoadingComponent,
} satisfies Meta<typeof LoadingComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageContent: Story = {
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
};
