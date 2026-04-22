import { Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from 'src/components/core';

import { HeaderAboveLg as HeaderAboveLgComponent } from './HeaderAboveLg';

const meta = {
  title: 'Features/Header/AboveLg',
  component: HeaderAboveLgComponent,
} satisfies Meta<typeof HeaderAboveLgComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' },
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
