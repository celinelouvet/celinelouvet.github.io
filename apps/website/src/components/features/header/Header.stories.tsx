import { Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from '@/components/core';

import { Header as HeaderComponent } from './Header';

const meta = {
  title: 'Features/Header',
  component: HeaderComponent,

  decorators: [
    (Story) => (
      <Stack>
        <Story />
        <PageContainer>
          <Text>Content</Text>
        </PageContainer>
      </Stack>
    ),
  ],
} satisfies Meta<typeof HeaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderBelowLg: Story = {
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
};

export const HeaderAboveLg: Story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};
