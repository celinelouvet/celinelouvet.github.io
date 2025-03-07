import { Box } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { ColorModeProvider } from '@/components/ui';

import { AllLinks as AllLinksComponent } from './AllLinks';

const meta = {
  title: 'Features/Home/Parts',
  component: AllLinksComponent,
  decorators: [
    (Story) => (
      <ColorModeProvider attribute="class">
        <Box padding="4" width="200px">
          <Story />
        </Box>
      </ColorModeProvider>
    ),
  ],
  args: {
    links: {
      audio: 'https://example.com/audio.mp3',
      program: 'https://conf-example.com',
      video: 'https://example.com',
    },
  },
} satisfies Meta<typeof AllLinksComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllLinks: Story = {};
