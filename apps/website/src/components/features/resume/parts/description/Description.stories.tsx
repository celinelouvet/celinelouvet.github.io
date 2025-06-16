import { type Meta, type StoryObj } from '@storybook/react';

import resume from '@/data/data.fr';

import { Description as DescriptionComponent } from './Description';

const meta = {
  title: 'Features/Resume/Parts',
  component: DescriptionComponent,
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
  args: {
    descriptions: resume.descriptions,
  },
} satisfies Meta<typeof DescriptionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Description: Story = {};
