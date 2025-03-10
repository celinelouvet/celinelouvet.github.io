import { type Meta, type StoryObj } from '@storybook/react';

import resume from '@/data/data.fr';

import { Remotes as RemotesComponent } from './Remotes';

const meta = {
  title: 'Features/Resume/Parts',
  component: RemotesComponent,
} satisfies Meta<typeof RemotesComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Remotes: Story = {
  args: {
    remotes: resume.remotes,
  },
};
