import { type Meta, type StoryObj } from '@storybook/react';

import resume from '@/data/data.fr';

import { Infos as InfosComponent } from './Infos';

const meta = {
  title: 'Features/Resume/Parts',
  component: InfosComponent,
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
  args: {
    resume,
  },
} satisfies Meta<typeof InfosComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Infos: Story = {};
