import { Box } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { ColorModeProvider } from '@/components/ui';

import { Biography as BiographyComponent } from './Biography';

const meta = {
  title: 'Features/Home/Parts',
  component: BiographyComponent,
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
    biographies: [
      'Développeuse backend et passionnée, depuis 18 ans, aimant la recherche de stabilité et de qualité d’une application.',
      'Spécialisée sur les architectures cloud, avec une appétence pour les langages fonctionnels.',
      'Actuellement lead developer chez Shine.',
    ],
  },
} satisfies Meta<typeof BiographyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Biography: Story = {};
