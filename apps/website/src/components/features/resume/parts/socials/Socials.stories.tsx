import { type Meta, type StoryObj } from '@storybook/react';

import resume from '@/data/data.fr';

import { Socials as SocialsComponent } from './Socials';

const meta = {
  title: 'Features/Resume/Parts',
  component: SocialsComponent,
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
  args: {
    socials: resume.socials,
  },
} satisfies Meta<typeof SocialsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Socials: Story = {};
