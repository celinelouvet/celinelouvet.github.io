import { Box, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from '@/components/core';
import { ColorModeProvider } from '@/components/ui';

import { HeaderAboveLg as HeaderAboveLgComponent } from './HeaderAboveLg';

const meta = {
  title: 'Features/Header/AboveLg',
  component: HeaderAboveLgComponent,

  decorators: [
    (Story) => (
      <ColorModeProvider attribute="class">
        <Box>
          <Story />
        </Box>
      </ColorModeProvider>
    ),
  ],
} satisfies Meta<typeof HeaderAboveLgComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
  render: () => (
    <Stack>
      <HeaderAboveLgComponent />
      <PageContainer>
        <Text>Content</Text>
      </PageContainer>
    </Stack>
  ),
};
