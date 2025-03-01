import { Box, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from '@/components/core';
import { ColorModeProvider } from '@/components/ui';

import { HeaderBelowLg as HeaderBelowLgComponent } from './HeaderBelowLg';

const meta = {
  title: 'Features/Header/BelowLg',
  component: HeaderBelowLgComponent,

  decorators: [
    (Story) => (
      <ColorModeProvider attribute="class">
        <Box>
          <Story />
        </Box>
      </ColorModeProvider>
    ),
  ],
  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },
} satisfies Meta<typeof HeaderBelowLgComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  render: () => (
    <Stack>
      <HeaderBelowLgComponent />
      <PageContainer>
        <Text>Content</Text>
      </PageContainer>
    </Stack>
  ),
};
