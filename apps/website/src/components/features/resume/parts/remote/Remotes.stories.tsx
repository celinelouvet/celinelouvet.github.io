import { type Meta, type StoryObj } from '@storybook/react';

import resume from 'src/data/data.fr';

import { Remotes as RemotesComponent } from './Remotes';

const meta = {
  title: 'Features/Resume/Parts',
  component: RemotesComponent,
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
  args: {
    remotes: resume.remotes,
  },
} satisfies Meta<typeof RemotesComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Remotes: Story = {};
