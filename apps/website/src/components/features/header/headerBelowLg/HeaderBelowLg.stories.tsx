import { Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from '@/components/core';

import { HeaderBelowLg as HeaderBelowLgComponent } from './HeaderBelowLg';

const meta = {
  title: 'Features/Header/BelowLg',
  component: HeaderBelowLgComponent,
} satisfies Meta<typeof HeaderBelowLgComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },

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
};
