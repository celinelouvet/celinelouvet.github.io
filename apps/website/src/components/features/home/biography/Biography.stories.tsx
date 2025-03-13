import { type Meta, type StoryObj } from '@storybook/react';

import { Biography as BiographyComponent } from './Biography';

const meta = {
  title: 'Features/Home/Parts',
  component: BiographyComponent,
} satisfies Meta<typeof BiographyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Biography: Story = {
  args: {
    biographies: [
      'Développeuse backend et passionnée, depuis 18 ans, aimant la recherche de stabilité et de qualité d’une application.',
      'Spécialisée sur les architectures cloud, avec une appétence pour les langages fonctionnels.',
      'Actuellement lead developer chez Shine.',
    ],
  },
};
