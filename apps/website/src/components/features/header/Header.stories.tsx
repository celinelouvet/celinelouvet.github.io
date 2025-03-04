import { Box, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from '@/components/core';
import { ColorModeProvider } from '@/components/ui';

import { Header as HeaderComponent } from './Header';

const meta = {
  title: 'Features/Header',
  component: HeaderComponent,

  decorators: [
    (Story) => (
      <ColorModeProvider attribute="class">
        <Box>
          <Story />
        </Box>
      </ColorModeProvider>
    ),
  ],
} satisfies Meta<typeof HeaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderBelowLg: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },
  render: () => (
    <Stack>
      <HeaderComponent />
      <PageContainer>
        <Text>Content</Text>
      </PageContainer>
    </Stack>
  ),
};

export const HeaderAboveLg: Story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
  render: () => (
    <Stack>
      <HeaderComponent />
      <PageContainer>
        <Text>Content</Text>
      </PageContainer>
    </Stack>
  ),
};
