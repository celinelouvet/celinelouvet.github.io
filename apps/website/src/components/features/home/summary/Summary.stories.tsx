import { Box } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { ColorModeProvider } from '@/components/ui';

import { Summary as SummaryComponent } from './Summary';

const meta = {
  title: 'Features/Home/Parts',
  component: SummaryComponent,
  decorators: [
    (Story) => (
      <ColorModeProvider attribute="class">
        <Box padding="4">
          <Story />
        </Box>
      </ColorModeProvider>
    ),
  ],
  args: {
    resume: {
      firstname: 'John',
      lastname: 'Doe',
      title: 'Software Engineer',
    },
  },
} satisfies Meta<typeof SummaryComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Summary: Story = {};
