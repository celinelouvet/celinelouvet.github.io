import { type Meta, type StoryObj } from '@storybook/react';

import resume from '@/data/data.fr';

import { Socials as SocialsComponent } from './Socials';

const meta = {
  title: 'Features/Resume/Parts',
  component: SocialsComponent,
} satisfies Meta<typeof SocialsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Socials: Story = {
  args: {
    socials: resume.socials,
  },
};
