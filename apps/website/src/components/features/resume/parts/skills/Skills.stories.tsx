import { type Meta, type StoryObj } from '@storybook/react';

import resume from '@/data/data.fr';

import { Skills as SkillsComponent } from './Skills';

const meta = {
  title: 'Features/Resume/Parts',
  component: SkillsComponent,
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
  args: {
    skills: resume.skills,
  },
} satisfies Meta<typeof SkillsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Skills: Story = {};
